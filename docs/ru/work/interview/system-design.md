---
lang: ru-RU
title: System Design интервью
---
# System Design интервью

## System Design

На этом этапе нужно спроектировать гипотетическую систему. Без опыта очень сложно или невозможно.

### Подготовка

[Егор Бирюков предлагает](https://vas3k.club/post/15768/#Whiteboard-algoritmy) оптимизировать следующие умения:
- понимать задачу
- уточняющими вопросами и предположениями определять скоуп и функциональные и не очень требования
- набросать от руки нагрузку и требования к технологиям
- набросать быстро высокоуровневую архитектуру, не погружаясь в детали
- понять, где нас ожидает главная сложность, определить возможные решения
- (самое главное) вслух, громко и четко говорить о трейд-оффах.

В процессе подготовки важно:
- Научиться вмещать процесс в 45-55 минут
- Научиться соблюдать определённый порядок
- Научиться для больших задач отделять важное от неважного
- Научиться брать на себя и проявлять инициативу

Подготовка происходит так:
- Изучить книгу [Understanding Distributed Systems](https://www.amazon.com/Understanding-Distributed-Systems-distributed-applications/dp/1838430202)
- Изучить книгу [Кабан - Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321) - опционально
- Пройти курс [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview)
- Прочитать книгу [System Design Interview – An insider's guide](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF/ref=sr_1_2?crid=18KSHJQDMFKMT)
- Пройти мок-интервью на нужном языке (обязательно)

План интервью с таймером:
- Требования и вопросы: задача, пользователи, нагрузка и т.д. — *5-10 минут*
- Estimations: storage, нагрузка на сеть и т.д. — *5 минут*
- Высокоуровневый дизайн: квадраты со стрелками. Цели, результаты, потенциально узкие места, трейд-оффы — *10 минут*
- Глубокое погружение: некоторые части системы — *20 минут*
- Завершение: что получилось, как расти, как запускать — *5-10 минут*

::: tip
Постоянно показывать «инженерное мышление»: минусы, трейдофы, решения в терминах требований. Минимум конкретных технологий, можно упомянуть опыт.
:::

## Ссылки
- [System Design Primer](https://github.com/donnemartin/system-design-primer) — GitHub
- [My System Design Template](https://leetcode.com/discuss/career/229177/My-System-Design-Template) — topcat, LeetCode (2019)
- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview) — YouTube Channel (2020)
- [System Design CheatSheet](https://docs.google.com/document/d/1sA1Pz_vYBEaN0IQUuBLDGi3mSrKBt8tuDOqulGPwuCo/edit) — Никита Субботин