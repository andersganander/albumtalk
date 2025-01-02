## Table of contents

<!-- TOC -->

- [Table of contents](#table-of-contents)
- [Manual Testing](#manual-testing)
  - [Epic: Account](#epic-account)
  - [Epic: Navigation (OBS BYT UT BILD 1)](#epic-navigation-obs-byt-ut-bild-1)
  - [Epic: Albums](#epic-albums)
  - [Epic: Write review](#epic-write-review)
  - [Epic: Edit and delete review FORTSÄTT HÄR](#epic-edit-and-delete-review-fortsätt-här)
  - [Epic: View reviews](#epic-view-reviews)
  - [Epic: Comments](#epic-comments)
  - [Epic: Profile page](#epic-profile-page)
  - [Epic: Follow/unfollow](#epic-followunfollow)
  - [Epic: Search](#epic-search)
- [Validator Testing](#validator-testing)
  - [HTML (SKA DET HÄR VARA MED?)](#html-ska-det-här-vara-med)
    - [Fixed Errors (KOLLAAAAAAAA)](#fixed-errors-kollaaaaaaaa)
  - [CSS (SKA DET HÄR VARA MED?)](#css-ska-det-här-vara-med)
  - [Javascript (SKA DET HÄR VARA MED?)](#javascript-ska-det-här-vara-med)
  - [Python (JMF MED API README )](#python-jmf-med-api-readme-)
  - [Lighthouse (KOLLA)](#lighthouse-kolla)
- [Browser Testing](#browser-testing)
- [Device Testing](#device-testing)
- [Bugs](#bugs)
  - [Fixed Bugs (KANSKE BARA HÄNVISA TILL ISSUES)](#fixed-bugs-kanske-bara-hänvisa-till-issues)
  - [Unfixed bugs: (KANSKE BARA HÄNVISA TILL ISSUES)](#unfixed-bugs-kanske-bara-hänvisa-till-issues)

<!-- /TOC -->

## Manual Testing

All user stories have been manually tested upon implementation, and this has been documented in each user story by the fulfilled acceptance criteria for each user story. In connection with the deployment to Heroku, which occurred in each sprint, testing was also conducted there. In addition to these continuous tests, manual tests were conducted at the end of sprint 17. The results of these tests are presented below.

### Epic: Account

![Manual Testing - Account](src/assets/doc_images/testing/MT_Acc_1.png)
![Manual Testing - Account](src/assets/doc_images/testing/MT_Acc_2.png)
![Manual Testing - Account](src/assets/doc_images/testing/MT_Acc_3.png)

### Epic: Navigation (OBS BYT UT BILD 1)

![Manual Testing - Navigation](src/assets/doc_images/testing/MT_Nav_1.png) 
![Manual Testing - Navigation](src/assets/doc_images/testing/MT_Nav_2.png)

### Epic: Albums

![Manual Testing - Albums](src/assets/doc_images/testing/MT_Alb_1.png)
![Manual Testing - Albums](src/assets/doc_images/testing/MT_Alb_2.png)

### Epic: Write review

![Manual Testing - Write review](src/assets/doc_images/testing/MT_Rev_1.png)

### Epic: Edit and delete review FORTSÄTT HÄR



### Epic: View reviews


### Epic: Comments

![Manual Testing - Comments](src/assets/doc_images/testing/MT_Com_1.png)
![Manual Testing - Comments](src/assets/doc_images/testing/MT_Com_2.png)

### Epic: Profile page

![Manual Testing - Profile page](src/assets/doc_images/testing/MT_Pro_1.png)
![Manual Testing - Profile page](src/assets/doc_images/testing/MT_Pro_2.png)

### Epic: Follow/unfollow

![Manual Testing - Follow](src/assets/doc_images/testing/MT_Fol_1.png)

### Epic: Search

![Manual Testing - Profile page](src/assets/doc_images/testing/MT_Sea_1.png)

## Validator Testing

### HTML (SKA DET HÄR VARA MED?)

All HTML pages were run through the [W3C HTML Validator](https://validator.w3.org/). For the pages that can be accessed without login, the "Validate by URI" was used. For the pages that does require log in the page source was used as input to the validator, using "Validate by Direct Input".


| Page                   | Logged Out | Logged In |
| ------------------------ | ------------ | ----------- |
| about.html             |            |           |
| add_subscribtion.html  | N/A        | NO ERRORS |
| edit_subscription.html | N/A        | ERROR 1   |
| subscription_list.html | N/A        | NO ERRORS |
| subscription_summary   | N/A        | NO ERRORS |
| login.html             | NO ERRORS  | N/A       |
| logout.html            | N/A        | NO ERRORS |
| signup.html            | ERROR 2    | N/A       |
| 400.html               | No errors  | No errors |
| 500.html               | N/A        | No errors |

#### Fixed Errors (KOLLAAAAAAAA)

**ERROR 1**
![HTML Validation](docs/readme_images/testing/Val_1.png)
Fixed by removing the action attribute.

**ERROR 2**

![HTML Validation](docs/readme_images/testing/Val_2.png)
This error was harder to find a solution for. After a while i realised that the problem was related to the ul inside the span, which is not allowed. This was resolved by changing <code>form.as_p</code> to <code>form.as_div</code> .

### CSS (SKA DET HÄR VARA MED?)

The stylesheet style.css was validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) without any errors found.

### Javascript (SKA DET HÄR VARA MED?)

The Javascript files was validated with [Jshint](https://jshint.com/) with the following results:


| Script  | Result      | Comments       |
| --------- | ------------- | ---------------- |
| add.js  | 1 warning   | Warning 1      |
| base.js | no warnings | Note 1         |
| edit.js | no warnings | Note 1, Note 2 |
| list.js | no warnings | Note 1, Note 2 |

**Warning 1:** The array literal notation [] is preferable. Fixed ([#80](https://github.com/andersganander/Subscription_manager/issues/80)).<br>
**Note 1:** Comments about the way Materialize components are initialized, f ex:
<code>M.updateTextFields();</code><br>
As it was mentioned, but not as a warning I just let it be. It's also the way that Materialize components are initialized in the documentation.<br>
**Note 2:** One unused variabled reported. Fixed.

### Python (JMF MED API README )

All Python files were run through the [CI Python Linter](https://pep8ci.herokuapp.com/) and all errors were corrected.

### Lighthouse (KOLLA)

The pages of the web site were tested using Lighthouse to check performance and accessibility.

<details>
<summary>Mobile</summary>

**Log in**
![Lighthouse validation](docs/readme_images/testing/LH_M_1.png)
<br>

**Sign up**
![Lighthouse validation](docs/readme_images/testing/LH_M_2.png)
<br>

**Subscription List**
![Lighthouse validation](docs/readme_images/testing/LH_M_4.png)
<br>

**Add subscription**
![Lighthouse validation](docs/readme_images/testing/LH_M_5.png)
<br>

**Edit subscription**
![Lighthouse validation](docs/readme_images/testing/LH_M_6.png)
<br>

**Delete subscription**
Not validated. It seems like the modal used in delete subscription is not "compatible" with Lighthouse validation. When trying to validate the delete page the modal disappears and it looks like the subscription list (which is the page that is shown after deletion) is validated instead
<br>

**Subscription summary**
![Lighthouse validation](docs/readme_images/testing/LH_M_7.png)
<br>

**Log out**
![Lighthouse validation](docs/readme_images/testing/LH_M_8.png)
<br>

</details>

<details>
<summary>Desktop</summary>

**Log in**
![Lighthouse validation](docs/readme_images/testing/LH_DT_1.png)
<br>

**Sign up**
![Lighthouse validation](docs/readme_images/testing/LH_DT_2.png)
<br>

**Subscription List**
![Lighthouse validation](docs/readme_images/testing/LH_DT_4.png)
<br>

**Add subscription**
![Lighthouse validation](docs/readme_images/testing/LH_DT_5.png)
<br>

**Edit subscription**
![Lighthouse validation](docs/readme_images/testing/LH_DT_6.png)
<br>

**Delete subscription**
Not validated. It seems like the modal used in delete subscription is not "compatible" with Lighthouse validation. When trying to validate the delete page the modal disappears and it looks like the subscription list (which is the page that is shown after deletion) is validated instead
<br>

**Subscription summary**
![Lighthouse validation](docs/readme_images/testing/LH_DT_7.png)
<br>

**Log out**
![Lighthouse validation](docs/readme_images/testing/LH_DT_8.png)
<br>

</details>

## Browser Testing

- The Website was tested on Google Chrome, Firefox, Safari browsers with no issues noted.

## Device Testing

- The website was viewed on different devices such as Desktop, Laptop, iPhone SE,  and iPad to ensure responsiveness. The responsive design was also checked using Chrome developer tools.

## Bugs

### Fixed Bugs (KANSKE BARA HÄNVISA TILL ISSUES)

![Fixed bugs](docs/readme_images/testing/Fixed_bugs.png)

### Unfixed bugs: (KANSKE BARA HÄNVISA TILL ISSUES)

Below follows a list of bugs that have not been addressed prior to the first release. None of the bugs have been considered so critical that they had to be addressed before the first version of AlbumTalk and will therfore be prioritized and handled in upcoming sprints.

![Unfixed bugs](https://github.com/andersganander/albumtalk/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

| Bug                                                | Link         |
| :------------------------------------------------- |:-------------|
| Fix empty links to Discogs and wikipedia           | [#68][i68]   |
| Fix Stars still filled when users logged out       | [#75][i75]   |
| Fix No message shown when there are no reviews     | [#76][i76]   |
| Fix Wrong favorite albums shown for logged in user | [#80][i80]   |
| Fix console warnings                               | [#81][i81]   |

[i68]: https://github.com/andersganander/albumtalk/issues/68
[i75]: https://github.com/andersganander/albumtalk/issues/75
[i76]: https://github.com/andersganander/albumtalk/issues/76
[i80]: https://github.com/andersganander/albumtalk/issues/80
[i81]: https://github.com/andersganander/albumtalk/issues/81
