---
lang: ru-RU 
title: Тестирование ПО
---
# Тестирование ПО

Тестирование помогает проверить и подтвердить, что программное обеспечение
- Не содержит ошибок
- Соответствует техническим требованиям и дизайну
- Удовлетворяет требованиям пользователей, обрабатывая все исключительные и пограничные случаи

Автоматический тест описывает желаемый сценарий, который соответствует требованиям. Если в будущем после доработки сценарий будет нарушен, тест об этом сообщит.

## Пирамида тестирования

Пирамида тестирования — популярная модель QA, включает в себя следующие уровни функционального тестирования:
- End-to-end Testing (сквозное, приёмочное, тестирование интерфейса)
- Integration Testing (интеграционное + системное)
- Unit Testing (модульное)

```
             -             
            / \            
           /   \           
          / e2e \          
         /       \         
        /---------\        
       /           \       
      / integration \      
     /               \     
    /-----------------\    
   /                   \   
  /     unit testing    \  
 /                       \ 
---------------------------
```

### Unit-тестирование

Unit-тестирование — основа пирамиды. Модульные тесты проверяют систему на уровне функций, классов, модулей и компонентов и всегда автоматизированы.

Помимо повышения надёжности компонента unit-тесты помогают разработчику разобраться, как компонент работает и узнать входные параметры, узкие места и ограничения.

Структура юнит-тестов обычно соответствует мнемоническому правилу «AAA» состоит из трёх блоков: «arrange, act, assert».

### Интеграционное тестирование

Предполагает тестирование связей между модулями или компонентами, а также компонента и системы.

### Тестирование End-to-end

Многие специалисты предлагают начинать с end-to-end тестирования и спускаться вниз по пирамиде, так как e2e-тестирование максимально приближено к пользователю, приносит максимум пользы, сразу окупается.

## Ссылки
- [Arrange Act Assert](https://wiki.c2.com/?ArrangeActAssert) — WikiWikiWeb (2012)
- [Библия QA](https://github.com/VladislavEremeev/QA_bible) — обновляемая база знаний объемом 560+ страниц, Vladislav Eremeev, GitHub (2022)