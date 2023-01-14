### Running locally

```
npm run dev
```

### Requirements

- To display your picture in about page, upload your picture to [imgur](https://imgur.com/) and paste the link to the image in [data.json](https://github.com/danger-ahead/nextjs_dev_folio/blob/bcbe65c293f114242fcbb0585e397951b2f0dab6/public/data.json#L3).
- To display your projects, fork [this repo](https://github.com/danger-ahead/serverless-apis). Deploy it with your own GitHub Personal Access Token. Then add the deployed link in project environment variables as `NEXT_PUBLIC_REPO_STATS_URL`.
