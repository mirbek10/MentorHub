export const mentorData = {
  basicInfo: {
    id: 1,
    firstName: "Айбек",
    lastName: "Токтосунов",
    avatarImageUrl: "/assets/img/mentor1.png",
    countSpecialization: 4.9,
    workExperience: "3 года",
    company: "Web Global",
    specialty: "Senior UX/UI Designer",
  },

  courses: [
    {
      courseId: 1,
      courseName: "Frontend Development",
      title: "Создание сайтов на React.js и TailwindCSS",
      coursePrice: 2000,
      rating: 5.0,
      specialists: ["React", "Tailwind", "Git", "API"],
      courseDescription: "Подходит для начинающих front-end разработчиков",
    },
    {
      courseId: 2,
      courseName: "UI/UX Design",
      title: "Проектирование интерфейсов в Figma",
      coursePrice: 2500,
      rating: 4.8,
      specialists: ["Figma", "UX Research", "UI", "Prototype"],
      courseDescription: "Для тех, кто хочет создавать удобные и красивые интерфейсы",
    },
    {
      courseId: 3,
      courseName: "Motion Design",
      title: "Анимация в After Effects для Web",
      coursePrice: 2200,
      rating: 4.9,
      specialists: ["After Effects", "Lottie", "UI Motion"],
      courseDescription: "Для дизайнеров, кто хочет добавить динамику в проекты",
    },
  ],
};
