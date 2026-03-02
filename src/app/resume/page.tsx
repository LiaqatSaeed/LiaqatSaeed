
import { Title } from "@/components/sections/title";
import { Document, Page, pdfjs } from "react-pdf";

const workerSrc = "/pdf.worker.min.js"; // Update the path accordingly
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const resumeUrl = "/Liaqat_Saeed_Resume.pdf#toolbar=0&navpanes=0#view=FitH";

import { sectionDetailsStyle } from "@/styles";
export default function Resume() {
  return (
    <div className={sectionDetailsStyle}>
      <Title title="Resume" />
      <embed src={resumeUrl} width="100%" style={{height: "calc(100% - 100px)"}} />
    </div>
  );
}
