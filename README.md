# projectver1game_jindoju

진도 주니어 투자교실 정적 웹사이트입니다.

## 배포

`main` 브랜치에 변경 사항을 푸시하면 GitHub Actions가 기존 Cloudflare
Pages 프로젝트 `projectver1game`에 자동으로 배포합니다.

GitHub 저장소의 `Settings > Secrets and variables > Actions`에 다음
Repository secret이 필요합니다.

- `CLOUDFLARE_API_TOKEN`: Cloudflare Pages 편집 권한이 있는 API 토큰

Cloudflare 계정 ID와 Pages 프로젝트 이름은
`.github/workflows/deploy.yml`에 설정되어 있습니다.
