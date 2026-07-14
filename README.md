# @epiclog/kiosk-mission

키오스크 미션 연동 React 컴포넌트.  
버튼 하나로 코드 팝업을 띄우고, 사용자별 데이터를 키오스크와 연동합니다.

## 설치

```bash
npm install @epiclog/kiosk-mission
```

## 사용법

```jsx
import { KioskMission } from '@epiclog/kiosk-mission';

function GameScreen({ currentPlayer }) {
  return (
    <KioskMission
      secret="관리자에게 받은 시크릿"
      projectId="키오스크 프로젝트 ID"
      targetId={currentPlayer.objectId}  // 이 사람의 레코드 ID
      expiresIn={5}                       // 코드 유효 시간(분)
    >
      {({ open, loading }) => (
        <button onClick={open} disabled={loading}>
          🏆 키오스크 미션 완료
        </button>
      )}
    </KioskMission>
  );
}
```

## Props

| Prop | 타입 | 필수 | 설명 |
|---|---|---|---|
| `secret` | string | ✅ | 관리자에게 받은 API Secret Key |
| `projectId` | string | ✅ | 키오스크 프로젝트 ID |
| `targetId` | string | ✅ | 이 사용자의 외부DB 레코드 objectId |
| `expiresIn` | number | | 코드 유효 시간(분), 기본값 5 |
| `apiUrl` | string | | API 주소, 기본값 kioskadm.vercel.app |
| `title` | string | | 팝업 타이틀 |
| `desc` | string | | 팝업 설명 |
| `children` | function | | 커스텀 트리거 렌더링 `({ open, loading }) => ReactNode` |

## children 없이 기본 버튼 사용

```jsx
<KioskMission
  secret="..."
  projectId="..."
  targetId={player.id}
/>
```
