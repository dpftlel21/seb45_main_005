## **Team. 🎶 Sound Oasis**

Sound Oasis 는 날씨와 더불어 유저가 처한 상황 (운동, 기분)에 따라 음악 추천을 하며, 유저들끼리 자신의 플레이리스트, 애청곡을 공유하는 웹 싸이트입니다.

사용자는 간편하게 플레이리스트를 생성하고, 자신의 음악을 기반으로 공유하며 , 날씨나 상황에 맞게 음악을 추천 받을 수 있는 직관적인 사용자 경험을 제공하고자 기획했습니다.

### 🖥️ 배포 및 시연 영상

✔️ **[배포 싸이트](http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/)**

✔️ **[서비스 메뉴얼](https://delightful-garage-44a.notion.site/Sound-Oasis-0e08af41c6604161936eecb6cd3b2399)**

✔️ **[시연 영상](https://www.youtube.com/watch?v=bZFvkko9CmU)**

---

## 📝 자료

#### ✔️ **[Figma](https://www.figma.com/file/RXDA1Zvfl7sjb7owNxb7VA/Sound-Oasis?type=design&node-id=0-1&mode=design&t=WUWxwmaabthRoGLn-0)**

#### ✔️ **[요구사항명세서](https://docs.google.com/spreadsheets/d/1tMNL7fW6n4lfJNCL9hmjVsViEf8JIWUlEQq5WvfVh1Q/edit#gid=0)**

#### ✔️ **[API 명세서](https://documenter.getpostman.com/view/27563991/2s9Y5VVjyz#2d510dac-b193-468e-948d-a98d6099e958)**

#### ✔️ **[Notion](https://www.notion.so/f38c8d3112c4453cbf61539906b4160c?v=5badf6b0ebc64f9f9f41834af8a552a2)**

#### ✔️ **[Git Repository](https://github.com/codestates-seb/seb45_main_005/tree/feDev)**

---

## ✔️ 주요 기능

### ✨ 날씨별 플레이리스트 추천

날씨에 따라 어울리는 음악들을 선정하여 플레이리스트를 담고 날씨의 변화에 따라 플레이리스트들도 그에 맞게 바뀌게끔 구현했습니다.

### ✨ MUBTI

유저의 상황, 기분, 기타 설문을 통해 그에 맞는 음악들을 선정하여 플레이리스트를 생성하고, 설문 결과에 따라 플레이리스트들도 다 바뀌고, 담당자가 추천해주는 노래, 대표적인 음악 재생관련 유튜버 등 다양한 장르 및 분위기의 플레이리스트들이 존재합니다 !

### ✨ 커뮤니케이션 (게시판)

유저들끼리 자신의 음악 및 플레이리스트를 공유할 수 있는 공간을 제작하여, 자신의 플레이리스트들을 공유하고, 다른 유저들의 플레이리스트를 통해 음악에 대한 가치관 확장 등 활발한 의사소통을 경험하실 수 있습니다.

### ✨ 노래 검색, 노래 추가

스포티파이 api를 통해 노래 데이터를 받아오고, 노래 검색 후 아래 하단 추가 버튼을 통해 자신만의 플레이리스트에 노래를 저장하여 자신만의 플리를 구성할 수 있고, 다른 유저와의 커뮤니케이션을 하는 데 있어서 유용하게 사용할 수 있습니다.

<br>

---

## **🖥️ Stack**

### **✔️ 프론트엔드**

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="21"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="21"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" height="21"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>

### **✔️ 백엔드**

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" height="22"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" height="21"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" height="21">

### **✔️ 공통**

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" height="21"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" height="21">

---

## ✔️ Git Commit Message Convention

프로젝트의 커밋 메시지를 일관성 있고 명확하게 작성하기 위해 아래와 같은 구조로 커밋 메시지를 작성합니다. 이 Convention은 각각의 커밋이 어떤 작업을 수행하는지를 명확히 전달하여 협업과 버전 관리를 원활하게 합니다.

### 1. 구조

- `[타입]: 제목 (필수)`

- `[본문]: 변경 내용 (옵션)`

### 2. 타입 및 Emoji

| 타입             | emoji | 코드                      | 설명                                                                      |
| ---------------- | ----- | ------------------------- | ------------------------------------------------------------------------- |
| feat             | ✨    | `:sparkles:`              | 새로운 기능 추가                                                          |
| fix              | 🐛    | `:bug:`                   | 버그 수정                                                                 |
| design           | 📱    | `:iphone:`                | 사용자 UI 디자인 변경                                                     |
| style            | 🎨    | `:art:`                   | 코드 포맷 변경, 세미 콜론 누락, 코드 수정 없음                            |
| comment          | 💡    | `:bulb:`                  | 주석 추가 및 변경                                                         |
| docs             | ♻️    | `:recycle:`               | 프로덕션 코드 리팩토링                                                    |
| refactor         | 📝    | `:memo:`                  | 문서 수정                                                                 |
| test             | ✅    | `:white_check_mark:`      | 테스트 추가 또는 리팩토링                                                 |
| rename           | 🚚    | `:truck:`                 | 파일이나 폴더명 변경, 이동 작업만                                         |
| remove           | ➖    | `:heavy_minus_sign:`      | 파일 삭제 작업만                                                          |
| !BREAKING CHANGE | 👽️   | `:alien:`                 | 커다란 API 변경                                                           |
| !HOTFIX          | 🔥    | `:fire:`                  | 급하게 치명적인 버그 수정                                                 |
| chore            | 🏗️    | `:building_construction:` | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |

### 커밋 예시

✨ feat: 검색 기능 추가 #1(이슈 번호 작성)

- 변경 사항 1
- 변경 사항 2 // 본문은 필요에 따라 작성

### 주의사항

- 커밋 메시지는 명료하고 간결하게 작성하는 것이 좋습니다.

- 커밋 타입과 내용을 일광성 있게 작성하여 프로젝트의 커밋 로그를 쉽게 읽을 수 있도록 합니다.

- 이슈를 참조하는 경우 이슈 번호를 커밋 메시지에 포함시키는 것이 유용합니다. 이를 통해 이슈와 관련되 커밋을 추적할 수 있습니다.

---

## ✔️ Git Flow

<img src="https://postfiles.pstatic.net/MjAyMzA4MjRfMjYg/MDAxNjkyODg0NzUwODYy.MGvlte9ejlBgtit9mOfr-N19N7PRPNe5qGpQSJXj2w8g.FtZcOSUpMUTrWtvPaAWdr4s6hcKPMW1VOxxE1P-xZkAg.PNG.dkdnmju/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-08-24_145307.png?type=w773">

### 1. Git 브랜치명 규칙

프로젝트의 팀원들은 아래와 같은 Git 브랜치명 규칙을 따라 브랜치를 관리합니다. 이 규칙은 팀원들이 브랜치를 일관성 있게 생성하고 관리하여 협업을 원할하게 하도록 도와줍니다.

### 2. 기본 브랜치

- 메인 브랜치 : 'main'

- 개발 브랜치 : 'dev'

### 3. 개발 브랜치

- BE 개발 브랜치 : 'beDev'

- FE 개발 브랜치 : 'feDev'

### 4. 기능 브랜치

- BE 기능 브랜치 : 'be/[타입]/[기능 이름]/[#이슈번호]'

-예시 : 'be/feat/login/#1'

- FE 기능 브랜치 : 'fe/[타입]/[기능 이름]/[#이슈번호]'

-예시 : 'fe/feat/login/#1'

<br>

---

### 1️⃣ 설계

- Figma를 활용하여 초기 화면 설계
- 컴포넌트 기반의 재사용성, 뛰어난 성능 및 커뮤니티 지원을 고려하여 React 프레임워크 선택
- 컴포넌트 간의 데이터 공유와 효율적인 전역 상태 관리 및 데이터의 일관성을 유지하기 위해 Redux 선택

### 2️⃣ 역할

- TailWind.css 및 Animate.css를 활용하여 동적인 화면 구현
- React와 Axios 활용 및 Redux를 도입하여 전역 상태를 관리하고, 백엔드에서 제공하는 Restful API를 이용하여 플레이리스트 생성, 조회, 수정 기능 구현
- 플레이리스트 검색 기능은 useState 를 활용하여 실시간으로 검색어를 관리하며, 백엔드 API 호출을 통해 결과를 동적으로 표시하여 구현
- 서버 Rest API를 활용하여 날씨 정보를 획득하고, 현재 날씨에 따라 음악을 추천하는 기능 구현
- Axios를 활용하여 사용자가 설문을 클릭할 때마다 해당 설문 번호를 상태로 관리하고, 이를 백엔드로 전송하여 플레이리스트 추천 결과를 동적으로 표시
- react-player 라이브러리를 활용하여 노래 재생 플레이어 구현
- 웹 접근성을 강화하기 위해 tabIndex 를 활용하여 웹 애플리케이션의 리스트들에 키보드로 쉽게 액세스할 수 있도록 설정
- AWS를 활용하여 웹 애플리케이션 배포

### 3️⃣ 문제 발생 및 해결

#### 📝 <span style="color:#90caf9">Typescript 이미지 불러오기 오류, Tailwind bg-[url(””)] 코드 작동 오류</span>

Typescript에서 이미지를 불러올 때 발생한 오류를 해결하기 위해 웹팩 설치 가이드라인을 참고하여 웹팩을 설정했습니다.

bg-[url("")] 코드가 작동하지 않아서 대신 이미지를 import하여 스타일에 직접 적용하니 정상적으로 작동했습니다.

#### 📝 <span style="color:#90caf9">모달이 열릴 때 리랜더링을 시키는데 리랜더링을 할 때 서버의 데이터를 받아온 후 바로 화면에 적용이 되지 않는 오류</span>

모달이 열릴 때 발생하는 리랜더링 오류를 해결하기 위해, 서로 다른 상태를 가진 각각의 모달 컴포넌트 간에 상태를 전달하여 해결했습니다.

이전에 띄워준 모달 창이 갱신 되지 않는 문제를 해결하기 위해, 변경된 상태 값을 해당 모달 컴포넌트로 전달하여 정상적인 리랜더링이 이루어지도록 수정했습니다.

#### 📝 <span style="color:#90caf9">Git 폴더 명의 대,소문자 관련 캐시가 남아있어 발생한 오류</span>

git rm -r --cached 명령어를 통해 이전 폴더명에 대한 캐시를 완전히 삭제하고 다시 푸시 한 후에야 문제가 해결되었습니다.

#### 📝<span style="color:#90caf9">디자인 문제</span>

프로젝트 초기 단계에서 Figma 및 화면 정의서를 기반으로 화면을 구성할 때, 각 페이지와 컴포넌트 간 디자인 통일성이 미흡하여 팀원들과 의사소통을 통해 통일성을 맞췄습니다.

이 경험을 통해 초기 디자인 단계에서 디자인 통일에 대한 중요성을 깨달았으며, 이를 향후 기획 및 디자인 단계에서 더 신경 쓰도록 다짐하게 되었습니다.

---

**개발기간 : 2023.08.24 ~ 2023.09.22**
