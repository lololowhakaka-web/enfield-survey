const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); // Раскрыть на весь экран

// ---------- СПИСОК ВОПРОСОВ (16 + два дополнительных = 18) ----------
const questions = [
    {
        id: 1,
        text: '1. Как Вы обычно отвечаете на вопрос “где Вы живёте?”',
        options: ['В ЖК «Энфилд»', 'В Буграх', 'В Мурино', 'В Ленинградской области', 'В Санкт-Петербурге', 'Другое'],
        hasCustom: true
    },
    {
        id: 2,
        text: '2. С чем Вы себя больше всего ассоциируете?',
        options: ['С ЖК «Энфилд»', 'С Буграми', 'С Мурино', 'С Санкт-Петербургом', 'С Санкт-Петербургской агломерацией в целом', 'Затрудняюсь ответить'],
        hasCustom: false
    },
    {
        id: 3,
        text: '3. Бытовая ситуация у дома. Знакомый кассир в «Ленте» спрашивает: «А где вы живёте?» Вы скорее всего ответите:',
        options: ['Я живу в ЖК «Энфилд»', 'Я живу в Буграх', 'Я живу в Мурино', 'Я живу в Ленинградской области', 'Я живу в Санкт-Петербурге', 'Другое'],
        hasCustom: true
    },
    {
        id: 4,
        text: '4. Новое знакомство в ТЦ Мурино. Вас спрашивают, где Вы живёте. Вы отвечаете:',
        options: ['Я живу в ЖК «Энфилд»', 'Я живу в Буграх', 'Я живу в Мурино', 'Я живу в Ленинградской области', 'Я живу в Санкт-Петербурге', 'Другое'],
        hasCustom: true
    },
    {
        id: 5,
        text: '5. Ситуация на Невском проспекте. Коренной петербуржец спрашивает, где Вы живёте. Вы скорее всего скажете:',
        options: ['Я живу в ЖК «Энфилд»', 'Я живу в Буграх', 'Я живу в Мурино', 'Я живу в Ленинградской области', 'Я живу в Санкт-Петербурге', 'Другое'],
        hasCustom: true
    },
    {
        id: 6,
        text: '6. Контакт с человеком из другого региона. «Ты откуда? Где живешь?» Ваш ответ:',
        options: ['Я живу в ЖК «Энфилд»', 'Я живу в Буграх', 'Я живу в Мурино', 'Я живу в Ленинградской области', 'Я живу в Санкт-Петербурге', 'Другое'],
        hasCustom: true
    },
    {
        id: 7,
        text: '7. Родственники из Твери спрашивают: «А где именно ты теперь живёшь?» Как Вы обычно это объясняете?',
        options: ['В ЖК «Энфилд»', 'В Буграх', 'В Мурино', 'В Ленинградской области', 'В Санкт-Петербурге', 'Объясняю более общо (например, "рядом с Петербургом")', 'Другое'],
        hasCustom: true
    },
    {
        id: 8,
        text: '8. Где Вы чаще всего проводите свободное время?',
        options: ['Внутри ЖК «Энфилд»', 'В Буграх', 'В Мурино', 'В Санкт-Петербурге', 'В других местах Ленинградской области', 'За пределами региона'],
        hasCustom: false
    },
    {
        id: 9,
        text: '9. Как часто Вы выезжаете за пределы ЖК без необходимости (не работа/не покупки)?',
        options: ['Почти никогда', 'Несколько раз в месяц', 'Несколько раз в неделю', 'Почти каждый день'],
        hasCustom: false
    },
    {
        id: 10,
        text: '9.1 Как Вы обычно добираетесь до работы / учёбы? (основной способ)',
        options: ['Пешком (в пределах ЖК или рядом)', 'На общественном транспорте', 'На личном автомобиле', 'Комбинирую несколько способов', 'Работаю / учусь удалённо', 'Другое'],
        hasCustom: true
    },
    {
        id: 11,
        text: '10. Насколько Вам комфортно проводить большую часть времени внутри своего ЖК? (1 — совсем не комфортно, 5 — полностью комфортно)',
        options: ['1', '2', '3', '4', '5'],
        hasCustom: false
    },
    {
        id: 12,
        text: '10.1 Оцените инфраструктурную обеспеченность своего ЖК? (1 — совсем не устраивает, 5 — полностью устраивает)',
        options: ['1', '2', '3', '4', '5'],
        hasCustom: false
    },
    {
        id: 13,
        text: '11. «ЖК "Энфилд" — это самостоятельное место жизни, а не просто часть Бугров» (1 — полностью не согласен, 5 — полностью согласен)',
        options: ['1', '2', '3', '4', '5'],
        hasCustom: false
    },
    {
        id: 14,
        text: '12. «В ЖК "Энфилд" есть всё необходимое для повседневной жизни без частых поездок в другие районы» (1 — полностью не согласен, 5 — полностью согласен)',
        options: ['1', '2', '3', '4', '5'],
        hasCustom: false
    },
    {
        id: 15,
        text: '13. «Я ощущаю себя жителем ЖК "Энфилд" в большей степени, чем жителем Бугров или Санкт-Петербурга» (1 — полностью не согласен, 5 — полностью согласен)',
        options: ['1', '2', '3', '4', '5'],
        hasCustom: false
    },
    {
        id: 16,
        text: '14. Как долго Вы проживаете в ЖК «Энфилд»?',
        options: ['Менее года', 'Год и более'],
        hasCustom: false
    },
    {
        id: 17,
        text: '15. Пол:',
        options: ['Мужской', 'Женский'],
        hasCustom: false
    },
    {
        id: 18,
        text: '16. Возраст:',
        options: ['18–35', '35–60', '60+'],
        hasCustom: false
    }
];

// Рендерим вопросы
const container = document.getElementById('questionsContainer');

questions.forEach(q => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.id = `q-block-${q.id}`;

    const qText = document.createElement('div');
    qText.className = 'q-text';
    qText.textContent = q.text;
    questionDiv.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    q.options.forEach((opt, idx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `q${q.id}`;
        radio.value = opt;
        radio.id = `q${q.id}_opt${idx}`;

        const label = document.createElement('label');
        label.htmlFor = `q${q.id}_opt${idx}`;
        label.textContent = opt;

        optDiv.appendChild(radio);
        optDiv.appendChild(label);
        optionsDiv.appendChild(optDiv);

        // Если это опция "Другое" и у вопроса есть поддержка кастомного ввода
        if (opt === 'Другое' && q.hasCustom) {
            const customInput = document.createElement('input');
            customInput.type = 'text';
            customInput.className = 'custom-input';
            customInput.id = `custom_q${q.id}`;
            customInput.placeholder = 'Введите свой вариант...';
            customInput.disabled = true;
            questionDiv.appendChild(customInput);

            radio.addEventListener('change', function(e) {
                if (this.checked) {
                    customInput.classList.add('active');
                    customInput.disabled = false;
                    customInput.focus();
                } else {
                    customInput.classList.remove('active');
                    customInput.disabled = true;
                    customInput.value = '';
                }
            });
        }
    });

    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);
});

// Обработка отправки формы
const form = document.getElementById('surveyForm');
const submitBtn = document.getElementById('submitBtn');
const statusDiv = document.getElementById('statusMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    statusDiv.textContent = '';
    statusDiv.className = 'error';

    // Проверка, все ли вопросы отвечены
    let allAnswered = true;
    const answers = {};

    questions.forEach(q => {
        const selectedRadio = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (!selectedRadio) {
            allAnswered = false;
            document.getElementById(`q-block-${q.id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        let answerValue = selectedRadio.value;
        // Если выбрано "Другое" и есть кастомное поле
        if (answerValue === 'Другое' && q.hasCustom) {
            const customInput = document.getElementById(`custom_q${q.id}`);
            if (customInput && customInput.value.trim() !== '') {
                answerValue = `Другое: ${customInput.value.trim()}`;
            } else {
                allAnswered = false;
                customInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }
        }

        answers[q.id] = answerValue;
    });

    if (!allAnswered) {
        statusDiv.textContent = 'Пожалуйста, ответьте на все вопросы (включая поле "Другое").';
        return;
    }

    // Собираем данные пользователя
    const user = tg.initDataUnsafe?.user || {};
    const resultData = {
        user_id: user.id || 'unknown',
        username: user.username || '',
        first_name: user.first_name || '',
        timestamp: new Date().toISOString(),
        answers: answers
    };

    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Отправка...';

    try {
        tg.sendData(JSON.stringify(resultData));
        statusDiv.textContent = '✅ Ответы отправлены! Окно закроется автоматически.';
        statusDiv.className = 'success';
        setTimeout(() => tg.close(), 1500);
    } catch (error) {
        console.error('Ошибка отправки:', error);
        statusDiv.textContent = '❌ Ошибка отправки. Попробуйте ещё раз.';
        submitBtn.disabled = false;
        submitBtn.textContent = '📤 Отправить ответы';
    }
});

// Настройка темы Telegram
tg.MainButton.hide();
tg.BackButton.onClick(() => {
    if (confirm('Вы уверены, что хотите прервать опрос?')) {
        tg.close();
    }
});