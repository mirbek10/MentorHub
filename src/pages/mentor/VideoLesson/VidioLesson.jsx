import React, { useEffect, useState } from 'react';
import './VideoLesson.scss';
import { Link, useNavigate } from 'react-router-dom';
import icon14 from '../../../../public/assets/svg/icon14.svg';
import vidioimg from '../../../../public/assets/MirbekImg/vidio.svg';
import icon19plus from '../../../../public/assets/svg/icon19plus.svg';
import icon12White from '../../../../public/assets/svg/icon12white.svg';
import { BsCaretRight } from 'react-icons/bs';
import { toast } from 'react-toastify';

function VideoLesson() {
    const navigate = useNavigate();
    const [pagesActive] = useState("/videolesson");

    const [showImageUrlInput, setShowImageUrlInput] = useState(false);
    const [imageUrlInput, setImageUrlInput] = useState('');
    const [showVideoUrlInput, setShowVideoUrlInput] = useState(false);
    const [videoUrlInput, setVideoUrlInput] = useState('');
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

    const pagesnav = [
        { id: 1, title: "Данные курса", link: "/newcourse" },
        { id: 2, title: "Данные курса", link: "/datacourse" },
        { id: 3, title: "Видео уроки", link: "/videolesson" },
    ];

    const [formData, setFormData] = useState({
        coursePreviewPhoto: '',
        coursePreviewVideo: '',
        durationPreview: 0,
        sections: [
            {
                sectionName: '',
                videoLessons: [
                    {
                        lessonName: '',
                        videoUrl: '',
                        thumbnailUrl: '',
                        duration: 0,
                    }
                ]
            }
        ]
    });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('step3'));
        if (saved) setFormData(saved);
    }, []);

    const handleLessonChange = (index, key, value) => {
        setFormData(prev => {
            const updatedLessons = [...prev.sections[0].videoLessons];
            updatedLessons[index][key] = value;

            return {
                ...prev,
                sections: [
                    {
                        ...prev.sections[0],
                        videoLessons: updatedLessons
                    }
                ]
            };
        });
    };

    const handleCourseMediaUrl = (url, type) => {
        setFormData(prev => ({
            ...prev,
            [type === 'previewVideo' ? 'coursePreviewVideo' : 'coursePreviewPhoto']: url
        }));
    };

    const handleLessonUrl = (url, index, type) => {
        setFormData(prev => {
            const updatedLessons = [...prev.sections[0].videoLessons];
            updatedLessons[index][type === 'video' ? 'videoUrl' : 'thumbnailUrl'] = url;

            return {
                ...prev,
                sections: [
                    {
                        ...prev.sections[0],
                        videoLessons: updatedLessons
                    }
                ]
            };
        });
    };

    const addLesson = () => {
        if (formData.sections[0].videoLessons.length >= 10) {
            toast.error('Максимум 10 уроков');
            return;
        }

        setFormData(prev => ({
            ...prev,
            sections: [
                {
                    ...prev.sections[0],
                    videoLessons: [
                        ...prev.sections[0].videoLessons,
                        { lessonName: '', videoUrl: '', thumbnailUrl: '', duration: 0 }
                    ]
                }
            ]
        }));
    };

    const removeLesson = () => {
        if (formData.sections[0].videoLessons.length <= 1) {
            toast.error('Должен остаться хотя бы один урок');
            return;
        }

        setFormData(prev => ({
            ...prev,
            sections: [
                {
                    ...prev.sections[0],
                    videoLessons: prev.sections[0].videoLessons.slice(0, -1)
                }
            ]
        }));
    };

    const getYouTubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
    };

    const isYouTubeUrl = (url) => /youtu(?:be\.com|\.be)/.test(url);

    const handleSubmit = () => {
        const step1 = JSON.parse(localStorage.getItem('step1'));
        const step2 = JSON.parse(localStorage.getItem('step2'));

        if (!step1 || !step2) {
            toast.error('Пожалуйста, завершите предыдущие шаги');
            return;
        }

        const section = formData.sections[0];
        const lessons = section.videoLessons;

        if (!formData.coursePreviewPhoto?.trim()) {
            toast.error('Не добавлена обложка курса');
            return;
        }

        if (!formData.coursePreviewVideo?.trim()) {
            toast.error('Не добавлено видео превью курса');
            return;
        }

        if (!section.sectionName?.trim()) {
            toast.error('Не указано название раздела');
            return;
        }

        for (let i = 0; i < lessons.length; i++) {
            if (!lessons[i].lessonName.trim() || !lessons[i].videoUrl.trim()) {
                toast.error(`Заполните все поля урока #${i + 1}`);
                return;
            }
        }

        // Сохраняем данные в localStorage (имитация шага 3)
        localStorage.setItem('step3', JSON.stringify(formData));
        toast.success('Видео-уроки сохранены (Redux отключен)');
        navigate("/mentorProfile/course");
    };

    const openImageUrlDialog = (index) => {
        setCurrentLessonIndex(index);
        setImageUrlInput('');
        setShowImageUrlInput(true);
    };

    const openVideoUrlDialog = (index) => {
        setCurrentLessonIndex(index);
        setVideoUrlInput('');
        setShowVideoUrlInput(true);
    };

    const applyImageUrl = () => {
        if (!/^https?:\/\/.+\..+/.test(imageUrlInput)) return toast.error('Некорректный URL изображения');
        currentLessonIndex === -1
            ? handleCourseMediaUrl(imageUrlInput, 'previewImage')
            : handleLessonUrl(imageUrlInput, currentLessonIndex, 'thumbnail');
        setShowImageUrlInput(false);
    };

    const applyVideoUrl = () => {
        if (!/^https?:\/\/.+\..+/.test(videoUrlInput)) return toast.error('Некорректный URL видео');
        const embedUrl = getYouTubeEmbedUrl(videoUrlInput);
        currentLessonIndex === -1
            ? handleCourseMediaUrl(embedUrl, 'previewVideo')
            : handleLessonUrl(embedUrl, currentLessonIndex, 'video');
        setShowVideoUrlInput(false);
    };

    const renderVideoPlayer = (url) => {
        if (!url) return <img src={vidioimg} alt="Добавить видео" style={{ maxWidth: 200, marginTop: 10 }} />;
        return isYouTubeUrl(url)
            ? <iframe width="325" height="116" src={getYouTubeEmbedUrl(url)} title="YouTube player" frameBorder="0" allowFullScreen style={{ borderRadius: 20 }} />
            : <video src={url} controls style={{ width: 325, height: 116, objectFit: 'cover', borderRadius: 20 }} />;
    };

    return (
        <div className="videolesson">
            {/* URL Input Modals */}
            {showImageUrlInput && (
                <div className="url-input-modal" onClick={() => setShowImageUrlInput(false)}>
                    <div className="url-input-content" onClick={e => e.stopPropagation()}>
                        <h3>Введите URL изображения</h3>
                        <input value={imageUrlInput} onChange={e => setImageUrlInput(e.target.value)} placeholder="https://example.com/image.jpg" />
                        <div className="url-input-buttons">
                            <button onClick={() => setShowImageUrlInput(false)}>Отмена</button>
                            <button onClick={applyImageUrl} disabled={!imageUrlInput.startsWith('http')}>Применить</button>
                        </div>
                    </div>
                </div>
            )}

            {showVideoUrlInput && (
                <div className="url-input-modal" onClick={() => setShowVideoUrlInput(false)}>
                    <div className="url-input-content" onClick={e => e.stopPropagation()}>
                        <h3>Введите URL видео</h3>
                        <input value={videoUrlInput} onChange={e => setVideoUrlInput(e.target.value)} placeholder="https://youtube.com/watch?v=..." />
                        <div className="url-input-buttons">
                            <button onClick={() => setShowVideoUrlInput(false)}>Отмена</button>
                            <button onClick={applyVideoUrl} disabled={!videoUrlInput.startsWith('http')}>Применить</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Верхние кнопки */}
            <div className="new">
                <div className="h">
                    <img onClick={() => navigate(-1)} src={icon14} alt="Назад" />
                    <p>Курс</p>
                </div>
                <div className="hBtn">
                    <button className="i">
                        <Link to="/datacourse">
                            <img src={icon12White} alt="Назад" />
                        </Link>
                    </button>
                    <button className='save-button' onClick={handleSubmit}>
                        <span>Далее</span>
                        <span className='arrow-right'><BsCaretRight /></span>
                    </button>
                </div>
            </div>

            <div className="newdata">
                <div className="category">
                    {pagesnav.map((page) => (
                        <button
                            key={page.id}
                            className={page.link === pagesActive ? 'active' : ''}
                        >
                            {page.title}
                        </button>
                    ))}
                </div>

                <div className="frame">
                    <div>
                        <h4>Обложка курса</h4>
                        <div className="file-pictyre">
                            <div
                                onClick={() => openImageUrlDialog(-1)}
                                style={{ cursor: 'pointer' }}
                                className='flex items-center gap-2'
                            >
                                {formData.coursePreviewPhoto ? (
                                    <img
                                        src={formData.coursePreviewPhoto}
                                        alt="Превью обложки"
                                        style={{ maxWidth: '200px', maxHeight: '150px', marginTop: '10px' }}
                                    />
                                ) : (
                                    <img
                                        src={vidioimg}
                                        alt="Добавить обложку"
                                        style={{ maxWidth: '200px', marginTop: '10px' }}
                                    />
                                )}
                                <p className='description'>Обложка курса</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4>Видео превью курса</h4>
                        <div className="file-video">
                            <div
                                onClick={() => openVideoUrlDialog(-1)}
                                style={{ cursor: 'pointer' }}
                                className='flex items-center gap-2'
                            >
                                {formData.coursePreviewVideo ? (
                                    renderVideoPlayer(formData.coursePreviewVideo)
                                ) : (
                                    <img
                                        src={vidioimg}
                                        alt="Добавить видео"
                                        style={{ maxWidth: '200px', marginTop: '10px' }}
                                    />
                                )}
                                <p className='description'>Превью курса</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-cource">
                    <div className="file">
                        <h3>Название раздела</h3>
                        <input
                            type="text"
                            value={formData.sections[0].sectionName}
                            onChange={(e) => {
                                const newSections = [...formData.sections];
                                newSections[0].sectionName = e.target.value;
                                setFormData({ ...formData, sections: newSections });
                            }}
                        />
                    </div>

                    <h2>Видеоуроки</h2>

                    {formData.sections[0].videoLessons?.map((lesson, index) => (
                        <div className="info1 flex items-center" key={index}>
                            <div>
                                <div onClick={() => openVideoUrlDialog(index)}>
                                    {renderVideoPlayer(lesson.videoUrl)}
                                </div>
                            </div>
                            <div className='w-full grid gap-2 h-[150px] items-center'>
                                <p className='description'>Название урока</p>
                                <input
                                    type="text"
                                    value={lesson.lessonName}
                                    onChange={(e) => handleLessonChange(index, 'lessonName', e.target.value)}
                                    placeholder="Курс по UX/UI"
                                    className='w-full h-[64px] text-[16px] text-gray-800 px-4 mb-2 border border-gray-300 rounded-md'
                                />
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center gap-2 justify-end">
                        <button onClick={addLesson} className="b w-[239px] h-[56px] rounded-[24px] p-[17px] bg-[#2D2D2D] text-white text-[16px] font-[600] flex items-center justify-center gap-2">
                            Добавить ещё
                            <img src={icon19plus} alt="" />
                        </button>
                        {formData.sections[0].videoLessons?.length > 1 && (
                            <button onClick={removeLesson} className="b w-[239px] h-[56px] rounded-[24px] p-[17px] bg-[#2D2D2D] text-white text-[16px] font-[600] flex items-center justify-center gap-2">
                                Удалить последний
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoLesson;
