function roughSizeInKB(str) {
  return ((str.length * 2) / 1024).toFixed(2); // returns size in KB
}

const str = JSON.stringify([
  {
    id: "199796662",
    documentType: "CorrDiaryE",
    description: "Personal Lines Renewal Invite Letter",
    filename: "persinv.pdf",
    mimeContentType: "application/pdf",
    documentGenerationStatus: "Stored",
    diaryDueDate: "2018-06-10T23:00:00Z",
    riskStartDate: "2018-06-01T11:03:29Z",
    riskEndDate: "2019-05-31T22:59:59Z",
    correspondenceDiaryType: "New Business Confirmation Diary",
    active: true,
    createdDate: "2018-06-01T11:05:53.667Z",
  },
  {
    id: "199796666",
    documentType: "PropDryE",
    description: "A_98HCXPRO",
    filename: "A_98HCXPRO.pdf",
    mimeContentType: "application/pdf",
    documentGenerationStatus: "Stored",
    riskStartDate: "2018-06-01T11:03:29Z",
    riskEndDate: "2019-05-31T22:59:59Z",
    active: true,
    createdDate: "2018-06-01T11:05:53.936Z",
  },
  {
    id: "200028320",
    documentType: "PropDryE",
    description: "A_98HCXPRO",
    filename: "A_98HCXPRO.pdf",
    mimeContentType: "application/pdf",
    documentGenerationStatus: "Stored",
    riskStartDate: "2019-05-31T23:00:00Z",
    riskEndDate: "2020-05-31T22:59:59Z",
    active: true,
    createdDate: "2018-06-05T16:35:37.205Z",
  },
]);

console.log(roughSizeInKB(str) + " KB");
