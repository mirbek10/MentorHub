import React, { useState } from "react";
import { Search } from "lucide-react";
import icon12 from "../../../../public/assets/svg/icon12.svg"
import icon13 from "../../../../public/assets/svg/icon13.svg"
import "./RequestsComponent.css";

const Requests = () => {
  const [currentTab, setCurrentTab] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const mockRequests = [
    { id: 1, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 2, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 3, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 4, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 5, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 6, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 7, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 8, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 1, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 2, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 3, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 4, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 5, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 6, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
    { id: 7, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "approved" },
    { id: 8, name: "Нурлан Капыров", desc: "Технологии: Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков", status: "new" },
  ];

  const filtered = mockRequests.filter((r) => r.status === currentTab);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const visible = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="requests">
      {/* Поиск */}
      <div className="search-box">
        <div className="input-wrapper">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Поиск запроса" />
        </div>
        <span className="total">Всего: {mockRequests.length}</span>
      </div>

      {/* Вкладки */}
      <div className="tabs">
        <button
          className={`tab ${currentTab === "new" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("new");
            setCurrentPage(1);
          }}
        >
          Новые
        </button>
        <button
          className={`tab ${currentTab === "approved" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("approved");
            setCurrentPage(1);
          }}
        >
          Одобрено
        </button>
      </div>

      {/* Список */}
      <div className="requests-list">
        {visible.map((req, index) => (
          <div key={`${req.id}-${index}`} className="request">
            <div className="user">
              <div className="avatar">👩‍💻</div>
              <div>
                <h3>{req.name}</h3>
                <p>{req.desc}</p>
              </div>
            </div>
            <div className="actions">
              <button className="blue"></button>
              <button className="gray"></button>
              <button className="red"></button>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="pagination">
            <div>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-num ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
            </div>
          <div>
           <button
            className="page-arrow"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <img src={icon12} alt="" />
          </button>
          <button
            className="page-arrow"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
           <img src={icon13} alt="" />
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requests;
