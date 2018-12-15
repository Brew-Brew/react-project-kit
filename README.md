# React Project boilerplate

```
Thanks to : https://github.com/zeakd
```

## WHY? :question:

> 토이 프로젝트를 시작할때, 여러 설정을 잡는데는 큰 공수가 든다. 따라서, 리액트 프로젝트를 쉽게 시작할수 있도록 나만의 프로젝트 스타트 boilerplate 스펙을 만든다.


### 1. create-react-app :book:
  - `cra`는 불필요한 설정들이 꽤 있지만, 그래도 웹팩설정을 일일히 해주는것 보다는 큰 작업이 줄기 때문에 cra로 먼저 만들었다.

### 2. sass :pencil:
  - `Sass` 사용했고, `classnames`를 활용해 CSS Module 형식으로 스타일을 설정하여 효율적인 스타일링을 적용했다.

### 3. Redux :clipboard:
  - `redux`로 데이터 관리를 하여 디버깅을 쉽게 한다.

### 4. Redux saga :blue_book:
  - `redux-saga`를 사용하여 비동기 데이터 call이나, 데이터 flow 관리를 한다. 익숙하지 않은 사람들은 사용하기 쉽지 않기 때문에, 반드시 사용할 필요는 없다.

### 5. react-rotuer v4 :mailbox_closed:
  - client side routing을 react router를 사용하여 적용하였다.

### 6. API 
  - promise 기반의 axios를 사용해 api call을 통해 데이터를 받습니다.
  - 임시로 데이터를 받기위해 https://reqres.in/ 에서 제공하는 restful api를 사용했습니다.

### 7. 패키지 관리 :school_satchel:
  - yarn

