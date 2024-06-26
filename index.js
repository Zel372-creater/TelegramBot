const { Telegraf, Markup} = require('telegraf');
const fs = require('fs')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>{ 
    ctx.reply(
        `${ctx.botInfo.first_name} Начал свою работу!\nПрежде чем начать играть прочитайте правила❗❗❗`, 
            Markup.keyboard(['📜Правила Игры','Создать Бункер☢️','Создать роль🧍'])
        )
})


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  

bot.hears('Создать роль🧍', (ctx) => {

        let gender = ["Мужчина", "Женщина"]
        let abilityToFertilize = [ "Чайлдфри", "Да", "Нет" ]
        let bodyType = [ "Атлетическое", "Крепкое", "Худощавое", "Толстяк", "Супер-спортивный", "Обычное"]
        let profession = [ "Порноактер", "Сммщик", "Шахтёр", "Судмедэксперт", "Хирург", "Мясник", "Изобретатель", "Бариста", "Спасатель", "Исследователь" ]
        let healthStatus = [ "Астма", "Косоглазие", "Фимоз", "Туберкулез", "Идеально здоров", "Алкоголизм крайней степени тяжести", "Геморой", "Диарея", "Немой", "Глухой" ]
        let hobby = [ "Игра на музыкальных инструментах", "Вязание и шитье", "Скалолазание", "Эксперт по выживанию", "Сочинение стихов и рассказов", "Хиромантия", "Кулинария", "Участие в квестах", "Фотошоп дизайн и компьютерная графика", "Лепка и создание скульптур" ]
        let phobia = [ "нет фобий", "ксилофобия", "блаптофобия", "коитофобия", "гомофобия", "мусофобия", "акнефобия", "мирмекофобия", "контрелтофобия", "гефирофобия" ]
        let characterTrait = [ "Преданный", "Крутой", "витает в облаках", "Жадный", "Недалекий", "Самоуверенный", "никакущий", "Мудрый", "Робкий", "Классный" ]
        let luggage = [ "Бензин", "носок", "4 айфон", "аппарат для давления", "Дрожжи", "набор инструментов", "электронная сигарета", "айкос и чемодан стиков", "настольная игра манчкин", "" ]
        let additionalInformation = [ "умеет пересаживать органы", "Эксперт по выживанию", "умеет «готовить суп из топора»", "может протянуть 40 дней без еды", "Украл Мону Лизу", "изнасиловал свою соседку", " страдает морской болезнью", "Был в отношениях с Ларисой Гузеевой", "однажды клонировал воробья может клонировать только воробьев", "надувная лодка" ]
        let actionCard = [ "убирает место из бункера", "озволяет вылечить от любого недуга любого игрока кроме вас", "добавляет одно место в бункер", "добавляет в бункер пауков", "можешь поменяться профессией с другим игроком", "возле бункера находится танк", "игрок напротив тебя не должен попасть в бункер", "защищает любого игрока на один ход (кроме вас)", "позволяет обменяться фобиями с другим игроком", "добавляет в бункер змей", "игрок слева от тебя должен попасть в бункер", "обмен профессиями слева направо", "позволяет обучится хобби другого игрока", "Обмен профессиями справа налево", "бункер находится в лесу", "бункер находится на разрушенной оружейной базе"]

        ctx.reply(
            "⚤Пол: "+ " " + `${gender[getRandomArbitrary(0,1)]}\n`+
            "🤰Способность к оплодотворению:"+ " " + `${abilityToFertilize[getRandomArbitrary(0,2)]}\n`+
            "📆Возраст: " + " " + `${getRandomArbitrary(18,99)}\n`+
            "💪Телосложение: " + " " + `${bodyType[getRandomArbitrary(0,5)]}\n`+
            "📏Рост: " + " " + `${getRandomArbitrary(145, 210)}\n`+
            "💼Профессия: " + " " + `${profession[getRandomArbitrary(0,9)]}\n`+
            "🩺Состояние Здоровья: " + " " +`${healthStatus[getRandomArbitrary(0,9)]}\n`+
            "🕹️Хобби: " + " " +`${hobby[getRandomArbitrary(0,9)]}\n`+
            "😱Фобия: " + " " + `${phobia[getRandomArbitrary(0,9)]}\n`+
            "🎭Черта Характера: " + " " + `${characterTrait[getRandomArbitrary(0,9)]}\n`+
            "🧳Багаж: " + " " + `${luggage[getRandomArbitrary(0,9)]}\n`+
            "📣Доп. Инфа: " + " " + `${additionalInformation[getRandomArbitrary(0,9)]}\n`+
            "Первая карта действия: " + " " + `${actionCard[getRandomArbitrary(0,15)]}\n`+
            "Вторая карта действия: " + " " + `${actionCard[getRandomArbitrary(0,15)]}\n`
        )
})

bot.hears('Создать Бункер☢️', (ctx) => {
    let bunkers = [
    `Тип бункера: Станция метро
    Состояние: Ухоженный
    Размер: Огромный
    Условия проживания: Общая спальня и душевая
    Главная комната: Серверная
    Дополнительная комната: Генетическая лаборатория
    Третья комната: Склад с запчастями от оружия
    Предмет: Книга по растеневодству
    Запас воды и еды: На полгода
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Пустыня рядом с центром вещания.`,
    
    `Тип бункера: Банковский склад
    Состояние: Ухоженный
    Размер: Средний
    Условия проживания: Общая спальня и душевая
    Главная комната: Радиостанция
    Дополнительная комната: Центр управления дронами
    Третья комната: Комната с 3D принтером
    Предмет: Респиратор
    Запас воды и еды: На три года
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Плоскогорье рядом с центром вещания.`,
    
    `Тип бункера: Гражданский бункер
    Состояние: Наполовину поломанный
    Размер: Средний
    Условия проживания: Совместная комната
    Главная комната: Кабинет психолога/сексолога
    Дополнительная комната: Карцер
    Третья комната: Комната отдыха
    Предмет: Гантели
    Запас воды и еды: На пять лет
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Кратер рядом с озеро`,

    `Тип бункера: Подводный купол
    Состояние: Обжитый
    Размер: Большой
    Условия проживания: Совместная комната
    Главная комната: Гараж
    Дополнительная комната: Студия стримера
    Третья комната: Центр управления дронами
    Предмет: Мешки с песком
    Запас воды и еды: На два года
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Хвойный лес рядом с водным хранилищем.`,

    `Тип бункера: Станция метро
    Состояние: Наполовину поломанный
    Размер: Огромный
    Условия проживания: Личные комнаты
    Главная комната: Химическая лаборатория
    Дополнительная комната: Генетическая лаборатория
    Третья комната: Инкубаторная
    Предмет: Лопаты
    Запас воды и еды: На полгода
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Лиственный лес рядом с озером.`,

    `Тип бункера: Военный бункер
    Состояние: Наполовину поломанный
    Размер: Средний
    Условия проживания: Раздельные спальни и душевые
    Главная комната: Комната с промышленными станками
    Дополнительная комната: Пивоварня
    Третья комната: Подпольный клуб
    Предмет: Энциклопедия животных и растений
    Запас воды и еды: На полгода
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Болото рядом с фабрикой.`,

    `Тип бункера: Космическая станция
    Состояние: Ухоженный
    Размер: Маленький
    Условия проживания: Раздельные спальни и душевые
    Главная комната: Инкубаторная
    Дополнительная комната: Карцер
    Третья комната: Комната с швейной машинкой
    Предмет: Хирургический набор
    Запас воды и еды: На год
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Кратер рядом с городом.`,

    `Тип бункера: Подводный купол
    Состояние: Новый
    Размер: Большой
    Условия проживания: Общая спальня и душевая
    Главная комната: Комната санитарной обработки
    Дополнительная комната: Склад одежды
    Третья комната: Склад медикаментов
    Предмет: Флейта
    Запас воды и еды: На три месяца
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Тайга рядом с рекой.`,

    `Тип бункера: Подземная лаборатория
    Состояние: Наполовину поломанный
    Размер: Маленький
    Условия проживания: Совместная комната
    Главная комната: Химическая лаборатория
    Дополнительная комната: Тренажёрный зал
    Третья комната: Комната с 3D принтером
    Предмет: Таблетки от боли в животе
    Запас воды и еды: На пять лет
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Горы рядом с морем.`,
    
    `Тип бункера: Подземная лаборатория
    Состояние: Заброшенный
    Размер: Большой
    Условия проживания: Совместная комната
    Главная комната: Кабинет психолога/сексолога
    Дополнительная комната: Подпольный клуб
    Третья комната: Генетическая лаборатория
    Предмет: Лопаты
    Запас воды и еды: На полгода
    Местоположение бункера (Если у вас Космическая станция, Арктическая база, или Подводный купол, игнорируйте этот пункт): Пустыня рядом с центром вещания.`
    ]

    ctx.reply(`${bunkers[getRandomArbitrary(0,9)]}`)
})

bot.hears('📜Правила Игры', (ctx) => {
    let rules = [
    `Правила игры
    Могли бы вы себе представить как это пережить глобальную катастрофу? Думаю что нет... Для этого был создан «Бункер Онлайн!» чтобы вы смогли ощутить как это! Наша игра очень простая, и на изучение правил вам не понадобится много времени! Уже после первой игры вы будете полностью понимать как играть.
    Так же перед началом игры советуем вам приготовить вкусный чай или кофе, взять печеньки и погрузится с головой в игру!
    
    История
    На земле вот-вот произойдет катастрофа, а может уже и началась!
    Я, как и большинство людей в панике пытаюсь выжить, и найти укрытие, чтобы спасти свою жизнь. В поисках убежища я увидел группу людей, но не знал что делать... Стоит подойти к ним или нет, ведь опасность сейчас на каждом шагу!
    Но так как терять было нечего я решил пойти к ним...
    Как только я начал подходить к людям, я понял, что мне невероятно повезло — все эти люди находились возле бункера на который была последняя надежда!
    Как оказалось они ждут людей, которым все еще удалось выжить, и разбили временный лагерь...
    Приняли меня хорошо, но что меня ждет дальше мне было не известно. Все что я понимал, так это то, что предстоит решить, кто действительно заслуживает попасть в бункер, чтобы остаться в живых. Тех, кто не попадет - ждет верная смерть.
    И тут началась моя история выживания...
    
    Обзор
    Катаклизм
    Описание текущего для игры катаклизма. Как это произошло, что случилось и четкое понимание того, с чем связаны проблемы, что даст вам понять в процессе игры кто среди людей вам подходит, а кого нужно выгнать.
    
    Бункер
    Описание найденного бункера. Единственный шанс, чтобы выжить в случае катаклизма - это попасть в бункер. У вас есть информация о времени его постройки, местонахождении и данные о спальных комнатах.
    Так же вам доступна следующая информация:
    - Размер бункера — общая площадь убежища.
    - Время нахождения — сколько вам потребуется времени, чтобы пережить катастрофу.
    - Количество еды — запас продуктов, которых вам должно хватить на период пребывания в бункере. В случае, если продуктов недостаточно или отсутствуют совсем, игроки будут вынуждены выходить из бункера во время катастрофы, чтобы добыть пищу.
    - В бункере имеется — те вещи, которые находятся внутри бункера и которые могут быть полезны при выживании.
    В зависимости от того, что находится в бункере, вам так же предстоит определить кто из выживших будет более полезен, учитывая данные обстоятельства.
    
    Описание персонажа
    Описание вашего персонажа. Ваш герой состоит из следующих характеристик:
    - Пол
    - Телосложение
    - Человеческая черта
    - Специальность
    - Здоровье
    - Хобби / Увлечение
    - Фобия / Страх
    - Инвентарь
    - Дополнительные сведения
    - Спец. возможность #1
    - Спец. возможность #2
    (см. Характеристики персонажа)
    Процесс игры
    В первом игровом круге все начинается с представления друг друга (см. Раунд игры).
    В процессе знакомства игрок раскрывает свой основной параметр — это специальность (см. Характеристики персонажа), и характеристики в зависимости от количества игроков (см. Количество игроков)
    На это дается каждому игроку по 1 минуте (см. Ваш ход).
    После того как каждый игрок рассказал о своем параметре, игроки получают 1 минуту общего времени на коллективное обсуждение (см. Коллективное обсуждение).
    После этого приходит время голосования. Игроки должны выбрать того, кто покинет временный лагерь и не попадет в бункер. Разглашать еще не открытые параметры в целях переубеждения игроков - запрещается (см. Голосование).
    После голосования начинается следующий игровой круг (раунд) (см. Раунд игры).
    Во всех последующих раундах раскрывается только один параметр, вне зависимости от количества игроков.
    В конце игры игроки, которые попали в бункер, раскрывают свои характеристики. Ведущий подводит итог (см. Победа в игре).`,
    
    `Количество игроков
    Количество людей в бункере ограничено. Так же в зависимости от количества желающих попасть в бункер зависит сколько характеристик нужно открыть в первый раунд игры.
    
    Количество игроков	Могут попасть в бункер	Характеристик в первый раунд (исключая специальность)
    6-7	3	3
    8-9	4	3
    10-11	5	2
    12-13	6	1
    14-15	7	1
    Раунд игры
    Первый раунд ходят по часовой стрелке, начиная с первого игрока который нашел бункер (Цифра в блоке "Желающие попасть в бункер").
    Следующий раунд игроки начинают ходить в обратном порядке, против часовой стрелки.
    Принцип последующих раундов так и продолжается, каждый новый раунд — новый порядок начала хода.
    Когда все игроки сделали свои ходы, ведущий игры (лидер во временном лагере) оглашает результаты голосования (см. Голосование) за исключение игрока из временного лагеря.
    Так продолжается до тех пор, пока не останется допустимое количество игроков (см. Количество игроков) в бункер.
    Ваш ход
    Ваш ход — самое время блеснуть! Вам дали время представить своего персонажа.
    Делайте игру интересной, включайте фантазию на максимум и расскажите свою историю!
    Не нужно просто зачитывать свои характеристики без эмоций, так игра будет не интересной.
    Помните — вы любым образом должны попасть в бункер!
    В зависимости от количества игроков, в первый раунд игры вы открываете нужное количество характеристик. (см. Количество игроков)
    Во все последующие ходы вы открываете по одной характеристике за ход (раунд).
    Голосование
    В игре есть голосование за исключение человека из временного лагеря.
    Голосование - обязательный процесс игры. Оно проводится в конце игрового раунда и оглашает голосование ведущий игры, он же лидер в лагере.
    
    Если большинство игроков решили не голосовать (например недостаточно информации об игроках) в текущем раунде — голосование автоматически объявляется закрытым, и игроки переходят в следующий раунд. В таком случае, в следующем раунде после окончания коллективного обсуждения (см. Коллективное обсуждение), игроки обязательно должны провести голосование. Процесс голосования будет проходить 2 раза, чтобы выгнать сразу 2‑х игроков. Переход в новый раунд без исключения игроков — невозможен.
    
    Пропускать голосование можно только 1 раз за игру (и не в последнем кругу)!`,
    
    `Если игроки решили провести голосование, тогда ведущий игры дает каждому игроку по 30 сек. на высказывание перед тем как запустить голосование (очередь идет по порядку от начала таблицы “Желающие попасть в бункер”).
    Время на высказывание вы можете потратить на объяснения за кого нужно проголосовать или же дополнительно защитить себя от голосов против вас, так же вы можете просто дать общий комментарий.
    Игрок может отказаться от высказывания, в таком случае слово переходит к следующему игроку без дополнительного времени.
    
    После всех высказываний ведущий игры запускает голосование.
    На голосование у игроков есть 15 сек. Так же запрещаются любые комментарии до момента завершения голосования.
    Ведущий игры может принудительно завершить голосование по истечению времени.
    В случае, если игрок нарушает правило тишины - на следующем раунде игрок теряет возможность высказывания перед началом голосования.
    В случае, если игрок не принял участие в голосовании, его голос идет против себя.
    
    Когда все голоса собраны есть несколько вариантов развития событий:
    1) Один игрок набрал больше чем 70% голосов — исключение из лагеря без оправдания.
    2) Один игрок набрал наибольшее количество голосов, но при этом общий процент составляет меньше 70% - игрок получает 30 сек. на оправдание.
    3) Несколько игроков получили наибольшее одинаковое количество голосов — каждый из этих игроков получает 30 сек. на оправдание.
    
    После завершения оправданий каждого из игроков ведущий игры начинает новое голосование с такими же правилами.
    Возможные варианты после повторного голосования:
    1) Если среди игроков, которые были на оправдании изменилось количество голосов — исключить из лагеря игрока, который набрал больше всех голосов.
    2) В случае, если другой игрок получил одинаковое количество голосов с кандидатом на вылет — новый кандидат на вылет получает 30 сек. на оправдание.
    3) В случае, если кандидаты на вылет получили одинаковое количество голосов - голосование объявляется закрытым и игроки переходят в следующий круг.
    4) В случае, если другой игрок получил больше чем 70% голосов — исключение из лагеря.
    5) В случае, если другой игрок получил наибольшее количество голосов и при этом общий процент составляет меньше 70% — игрок получает 30 сек. на оправдание.
    
    * За один раунд голосования игрок может только один раз получить оправдательную речь.
    * Во время оправдания нельзя разглашать свои характеристики (нарушение — исключение из лагеря).
    
    После финального завершения голосования (когда кандидаты на исключение определены) ведущий игры объявляет прощальную речь для каждого из игроков, который покидает временный лагерь.
    На прощальную речь у каждого игрока есть 15 сек. За это время игрок или другие игроки могут использовать спец. возможности и возможности от специальности.
    После завершения 15 сек. игрок покидает временный лагерь и больше не может принимать участие в игре (раскрывать характеристики или использовать любые игровые возможности). Не стоит забывать о том, что в игре есть возможность вернуть игрока в лагерь.`,

    `* На прощальной речи использовать карты, которые влияют на изменение хода голосования невозможно.

    Коллективное обсуждение
    Во время общего обсуждения каждый игрок имеет возможность что-то сказать. Здесь нет ограничений на каждого человека. Общее обсуждение длится 1 минуту.
    
    Победа в игре
    По завершению последнего голосования, когда определилось нужное количество людей для прохождения в бункер, игра завершается. Игроки, которые попали в бункер и переживут катаклизм - считаются победителями!
    Остальные игроки так и остаются возле лагеря поскольку искать другой бункер - нет смысла, ведь ситуация с катаклизмом совсем критическая. Некоторые потеряли надежду и решили погибнуть на месте, часть все-таки решила испытать удачу и попытаются выжить без бункера...
    
    Характеристики персонажа
    У каждого персонажа есть несколько характеристик, которые он получает в начале игры.
    Любой из параметров можно изменить используя специальную возможность, которая это позволяет сделать.
    
    Специальная возможность
    Каждую спец. возможность можно использовать только один раз за игру, но в любой момент игры (после исключения игрока из лагеря - запрещается этому игроку использовать спец. возможности).
    Каждая последующая спец. возможность не имеет привязки к предыдущей спец. возможности, например: если игрок использовал возможность "Аннулировать все специальности", после этого текущий или любой другой игрок может использовать возможность, которая генерирует для всех или для конкретного игрока специальность.
    Их можно использовать в любой момент игры или в зависимости от описания действия.
    
    Как использовать спец. возможность?
    Прежде всего вам нужно сказать, что вы используете спец. возможность (для этого в любой момент игры нужно произнести слова "стоп игра", использую свою спец.возможность).
    После этого игрок зачитывает свою спец. возможность. Ведущий выполняет необходимые изменения.
    
    Специальность
    Специальность — есть специальности, которые дают персонажу дополнительные бонусы (см. Профессиональные возможности). Их можно использовать в любой момент игры или в зависимости от описания действия
    У каждой специальности есть свой стаж работы:
     Дилетант — до 1 месяца
     Стажер — от 1 до 3 месяцев
     Новичок — от 4 месяцев до 1 года
     Любитель — от 1 до 2 лет
     Опытный — от 2 до 5 лет
     Эксперт — от 5 до 10 лет
     Профессионал — от 10 лет
    
    Чайлдфри — статус человека, при котором он категорически против любого участия в продолжении рода. По своей воле человек не будет участвовать в продолжении рода. При попытке насильно заставить или переубедить, человек может получить непоправимую психологическую травму.
    
    Если женщина в возрасте 50 лет или больше - она не может иметь детей. При телосложении "Хрупкое" или "Ожирение-сильное" - родить она сможет только с помощью специалистов (определенных профессий), которые могут решать проблемы с родами.
    Если мужчина в возрасте 60 лет и больше - он не может иметь детей. При телосложении "Ожирение-сильное" шанс на продолжение рода может быть только с помощью специалистов (определенных профессий).
    Также, если возраст мужчины больше 45 лет шанс того, что ребенок будет здоровый уменьшается.
    Присутствуют следующие этапы жизни: молодой, взрослый и пожилой.
    У характеристики "Здоровье" есть разные степени проблем: легкая, средняя, тяжелая и критическая.
    Уровень хобби оцениваnется следующим образом:
     Дилетант — до 1 месяца
     Начинающий — от 1 до 4 месяцев
     Новичок — от 5 месяцев до 1 года
     Любитель — от 1 до 2 лет
     Продвинутый — от 2 до 5 лет
     Мастер (гуру) — больше 5 лет`
    ]

    ctx.reply(`${rules[0]}`)
    ctx.reply(`${rules[1]}`)
    ctx.reply(`${rules[2]}`)
    ctx.reply(`${rules[3]}`)
})

module.exports.handler = async function (event, context) {
    const message = JSON.parse(event.body);
    await bot.handleUpdate(message);
    return {
        statusCode: 200,
        body: '',
    };
}