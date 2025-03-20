export default function Card() {
  return (
    <>
      <a href="#project-one" className="card">
        <h2>Project One</h2>
        <p>Something</p>
      </a>

      <div id="project-one" className="cardmodal">
        <div className="modal-content">
          <h2>Project one</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus ut cupiditate quod, facere obcaecati iste harum autem
            officia libero dolorem nesciunt accusantium debitis cumque,
            praesentium voluptatum aspernatur incidunt nulla optio?
          </p>
          <a href="#" className="close">
            Close
          </a>
        </div>
      </div>
    </>
  );
}
