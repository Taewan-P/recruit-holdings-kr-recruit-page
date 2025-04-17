# 리크루트 홀딩스 X KOREC 채용공고 페이지

## 이용방법

1. `pnpm install`
2. `pnpm run dev`
3. `pnpm run deploy` (배포)

## 프로젝트 설명 및 안내

- 해당 페이지는 [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) 을 이용하여 제작하였습니다.
- 모든 페이지는 `/content/docs` 안에 존재합니다. `.astro`, `.md`, `.mdx` 와 같은 파일을 넣으면 빌드 시 자동 변환됩니다.
- 디자인 커스텀은 `/styles/custom.css` 내에서 변경 가능합니다. 외에 컴포넌트별로 커스텀이 필요하다면 `/components`에 override 할 컴포넌트를 새로 생성하세요. 
  ([참고](https://starlight.astro.build/guides/overriding-components/))
- 이미지를 수정하거나 추가할 시에는 [Squoosh](https://squoosh.app)에서 `avif` 및 `webp`로 이미지 크기 최적화를 한 번 해주세요.
  `/src` 폴더 내부에 있는 이미지는 빌드 시 자동 최적화 되지만 미리 Squoosh에서 원하는 파라미터 만큼 최적화를 한 뒤에 하면 더 효과적입니다.
- 추후 인턴분이 해당 페이지 내용을 수정해야 되는 경우 연락 남겨 주시면 레포 권한을 드리겠습니다.


