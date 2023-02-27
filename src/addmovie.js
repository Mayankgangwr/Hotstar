import Rect, { useState } from "react";

const AddMovie = () => {
  const [data, setData] = useState({
    title: "",
    wood: "",
    year: "",
    language: "",
    starcast: "",
    link: "",
    img: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ok");
  };
  return (
    <>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  class="w-100"
                  style={{
                    borderTopLeftRadius:
                      ".3rem; border-top-right-radius: .3rem",
                  }}
                  alt="Sample photo"
                />
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-3 text-center">
                    {process.env.REACT_APP_BASEURL}
                  </h3>

                  <form class="px-md-2" onSubmit={handleSubmit}>
                    <div class="mb-4">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Movie Name"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        id="starcast"
                        name="starcast"
                        value={data.starcast}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Star Cast"
                      />
                    </div>
                    <div class="mb-4">
                      <select
                        className="form-select"
                        name="wood"
                        onChange={handleChange}
                      >
                        <option value="">Select Wood</option>
                        <option value="bollywood">Bollywood</option>
                        <option value="hollywood">Hollywood</option>
                        <option value="south movie">South Movie</option>
                        <option value="dubbed movie">Dubbed Movie</option>
                        <option value="upcoming">UpComing</option>
                        <option value="Populer">Popular</option>
                      </select>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                      <select
                        className="form-select me-1"
                        name="language"
                        onChange={handleChange}
                      >
                        <option value="">Select Language</option>
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="tamil">Tamil</option>
                        <option value="telugu">Telugu</option>
                        <option value="malyalam">Malyalam</option>
                        <option value="kannada">Kannada</option>
                      </select>
                      <select
                        className="form-select ms-1"
                        name="year"
                        onChange={handleChange}
                      >
                        <option value="">Select Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        id="link"
                        name="link"
                        value={data.link}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Download Link"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        id="img"
                        name="img"
                        value={data.img}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Image Link"
                      />
                    </div>

                    <button type="submit" class="btn btn-success btn-lg mb-1">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddMovie;
