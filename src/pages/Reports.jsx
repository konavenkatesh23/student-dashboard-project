import Layout from "../components/Layout";
import { jsPDF } from "jspdf";

function Reports() {
  const downloadPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(20);
      doc.text("Student Dashboard Report", 20, 20);

      doc.setFontSize(12);
      doc.text("Total Students: 120", 20, 40);
      doc.text("Total Courses: 15", 20, 50);
      doc.text("Total Faculty: 25", 20, 60);

      doc.save("report.pdf");
    } catch (error) {
      console.log(error);
      alert("PDF Generation Failed");
    }
  };

  return (
    <Layout>
      <div className="dashboard-card">
        <h2>Reports</h2>

        <button
          className="btn btn-danger mt-3"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
    </Layout>
  );
}

export default Reports;