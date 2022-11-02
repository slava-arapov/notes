---
lang: en-EN
title: Software Testing
---
# Software Testing

Software testing helps to verify and confirm that the software
- Does not have any errors
- Complies with technical requirements and design
- Complies with user requirements by handling all exceptional and edge cases

The automatic test describes the desired scenario that meets the requirements. If the scenario is violated in the future after refinement, the test will report it.

## The testing pyramid

The testing pyramid, a popular QA model, includes the following levels of functional testing:
- End-to-end Testing
- Integration Testing
- Unit Testing

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

### Unit testing

Unit testing is the basis of the pyramid. Unit tests test the system at function, class, module, component level. Unit tests are always automated.

Unit tests help the developer both to improve the reliability of a component and to understand how the component works and to find out the input parameters, bottlenecks, and limitations.

The structure of unit tests usually follows the mnemonic rule "AAA" and consists of three blocks: "arrange, act, assert".

### Integration testing

Involves testing the links between modules or components, as well as link between component and system.

### End-to-end testing

Some experts suggest starting with end-to-end testing and go down the pyramid, as e2e-testing is as close to the user, brings maximum benefit, immediately pays off.

## Links
- [Arrange Act Assert](https://wiki.c2.com/?ArrangeActAssert) — WikiWikiWeb (2012)
- [Библия QA](https://github.com/VladislavEremeev/QA_bible) — обновляемая база знаний объемом 560+ страниц, Vladislav Eremeev, GitHub (2022) 🇷🇺
