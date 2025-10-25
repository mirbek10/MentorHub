import React, { useEffect, useState } from 'react';
import './ChangeMentorInfo.scss';
import { FaArrowLeftLong, FaPencil } from 'react-icons/fa6';
import { BsCaretRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ChangeMentorInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    experience: '',
    specialty: '',
    workPlace: '',
    description: '',
  });

  const [showUrlModal, setShowUrlModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const companyList = [
    { id: 1, name: 'Meta', color: '#23AFCE' },
    { id: 2, name: 'Google', color: '#FABB05' },
    { id: 3, name: 'Apple', color: '#FF6B6B' },
    { id: 4, name: 'Microsoft', color: '#6C63FF' },
  ];

  const specialties = ['Frontend Development', 'Backend Development', 'Data Science', 'DevOps', 'UI/UX Design', 'QA'];

  // Заглушка: локально или API
  useEffect(() => {
    // Пример: fetch и установка state
  }, []);

  useEffect(() => {
    if (selectedCompanies.length > 0) {
      const companyNames = selectedCompanies.map(c => c.name).join(', ');
      setFormData(prev => ({ ...prev, workPlace: companyNames }));
    }
  }, [selectedCompanies]);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getEmbedUrl = (url) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const openUrlModal = (type, currentUrl) => {
    setModalType(type);
    setCurrentUrl(currentUrl);
    setNewUrl(currentUrl || '');
    setShowUrlModal(true);
  };

  const closeUrlModal = () => {
    setShowUrlModal(false);
    setNewUrl('');
  };

  const handleUrlSubmit = () => {
    if (newUrl && !newUrl.startsWith('http')) {
      toast.error('URL должен начинаться с http:// или https://');
      return;
    }

    if (modalType === 'avatar') setAvatarUrl(newUrl || '');
    else setVideoUrl(newUrl || '');
    closeUrlModal();
  };

  const handleMediaChange = (type, currentUrl) => {
    openUrlModal(type, currentUrl);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyInput = (e) => {
    setFormData(prev => ({ ...prev, workPlace: e.target.value }));
    setSelectedCompanies([]);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompanies(prev => {
      const isSelected = prev.some(c => c.id === company.id);
      if (isSelected) return prev.filter(c => c.id !== company.id);
      return [...prev, company];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      avatarUrl,
      previewUrl: videoUrl,
      description: aboutText,
      companies: selectedCompanies
    };
    console.log('Submitting mentor data:', payload);
    toast.success('Данные сохранены (имитация)');
  };

  return (
    <div className='change-mentor-info'>
      {showUrlModal && (
        <div className='url-input-modal'>
          <div className='url-input-content'>
            <h3>Введите URL {modalType === 'avatar' ? 'аватарки' : 'видео'}</h3>
            <input
              type="text"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            <div className='url-input-buttons'>
              <button onClick={closeUrlModal}>Отмена</button>
              <button onClick={handleUrlSubmit} disabled={!newUrl}>Сохранить</button>
            </div>
          </div>
        </div>
      )}

      <div className='change-mentor-info-header'>
        <div className='header-left'>
          <FaArrowLeftLong className='arrow-left' onClick={() => navigate(-1)} />
          <h3>Редактирование профиля</h3>
        </div>
        <button className='save-button' onClick={handleSubmit}>
          <span className='arrow-right'><BsCaretRight /></span>
        </button>
      </div>

      <form className='profile-edit-form' onSubmit={handleSubmit}>
        <div className='form-section'>
          <div className='profile-photo mt-[-20px]'>
            <label>Фото профиля</label>
            <div className='profile-photo-upload'>
              <div
                style={{
                  backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none',
                  backgroundColor: !avatarUrl ? '#f0f0f0' : 'transparent'
                }}
                className='photo-placeholder'
                onClick={() => handleMediaChange('avatar', avatarUrl)}
              />
              <button
                type="button"
                onClick={() => handleMediaChange('avatar', avatarUrl)}
                className='upload-button'
              >
                <FaPencil className='pencil-icon' />
              </button>
            </div>
          </div>

          <div className='form-inputs'>
            {['firstName', 'lastName', 'experience'].map(field => (
              <div className='form-input' key={field}>
                <label>
                  {field === 'firstName' ? 'Имя' :
                    field === 'lastName' ? 'Фамилия' :
                      'Опыт работы (лет)'}
                </label>
                <input
                  type={field === 'experience' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  min={field === 'experience' ? '0' : undefined}
                />
              </div>
            ))}
            <div className='form-input'>
              <label>Специальность</label>
              <select
                className='cursor-pointer'
                name='specialty'
                value={formData.specialty}
                onChange={handleInputChange}
                required
              >
                <option value=''>Выберите специальность</option>
                {specialties.map((spec, i) => (
                  <option key={i} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='form-place'>
          <label>Место работы</label>
          <input
            type='text'
            name='workPlace'
            placeholder='Например: компания Meta'
            value={formData.workPlace}
            onChange={handleCompanyInput}
            required
          />
          <div className='company-tags'>
            {companyList.map(company => {
              const isSelected = selectedCompanies.some(c => c.id === company.id);
              return (
                <small
                  key={company.id}
                  className='company-tag'
                  onClick={() => handleCompanyClick(company)}
                  style={{
                    border: `1px solid ${company.color}`,
                    backgroundColor: isSelected ? `${company.color}20` : '#FAFAFA',
                    color: isSelected ? company.color : '#2D2D2D'
                  }}
                >
                  Компания {company.name}
                </small>
              );
            })}
          </div>
        </div>

        <div className='video-preview-container'>
          <div className='gap-[20px] grid mt-[-20px]'>
            <h3 className='des'>Видео превью ментора</h3>
            <div className='preview-upload'>
              {videoUrl ? (
                <div className='video-wrapper'>
                  {getYouTubeId(videoUrl) ? (
                    <iframe
                      src={getEmbedUrl(videoUrl)}
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className='video-element'
                    />
                  ) : (
                    <video src={videoUrl} controls className='video-element' />
                  )}
                  <div className="video-controls flex items-center gap-3 mt-2 mb-2 md:mb-0 md:mt-0 md:gap-4 justify-between">
                    <button
                      type="button"
                      onClick={() => handleMediaChange('video', videoUrl)}
                      className="flex items-center gap-2 px-4 py-4 rounded-full text-[#ffd02c] border border-[#ffd02c] bg-transparent hover:bg-[#ffd02c] hover:text-[#000] transition-colors"
                    >
                      <FaPencil />
                    </button>
                    <button
                      type="button"
                      onClick={() => setVideoUrl('')}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-[#ffd02c] border border-[#ffd02c] bg-transparent hover:bg-[#ffd02c] hover:text-[#000] transition-colors"
                      title="Удалить видео"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className='add-button'
                  onClick={() => handleMediaChange('video', '')}
                >
                  +
                </button>
              )}
            </div>
          </div>
          <div className='about'>
            <h3 className='des'>Описание</h3>
            <div className='about-yourself'>
              <textarea
                placeholder='Расскажите о себе'
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                required
                minLength={50}
                name='description'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangeMentorInfo;
