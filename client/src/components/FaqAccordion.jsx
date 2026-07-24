const FaqAccordion = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <p className="text-muted">
          Find answers to the most commonly asked questions.
        </p>
      </div>

      <div className="accordion shadow-sm" id="faqAccordion">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqOne"
            >
              📌 How do I add a new student?
            </button>
          </h2>

          <div
            id="faqOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Fill out the student form with the required information and click
              the <strong>Add Student</strong> button. The student will
              immediately appear in the student table.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqTwo"
            >
              ✏️ How can I update student information?
            </button>
          </h2>

          <div
            id="faqTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Click the <strong>Edit</strong> button next to a student. Update
              the information in the form and click
              <strong> Update Student</strong>.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqThree"
            >
              🗑️ Can I delete a student record?
            </button>
          </h2>

          <div
            id="faqThree"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes. Click the <strong>Delete</strong> button beside the student
              record. A confirmation dialog will appear before the record is
              permanently removed.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqFour"
            >
              🔍 How does the search feature work?
            </button>
          </h2>

          <div
            id="faqFour"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Simply type a student's name, email, course, or department into
              the search bar. The table updates instantly with matching results.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqFive"
            >
              🔒 Is student data secure?
            </button>
          </h2>

          <div
            id="faqFive"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes. When connected to the backend, student information is
              securely stored in MongoDB and accessed through REST APIs built
              with Node.js and Express.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
