import Rect, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AddMovie = () => {
  const [data, setData] = useState({
    title: "",
    wood: "",
    year: "",
    language: "",
    starcast: "",
    img: "",
    tag: "",
    watchlink: "",
  });
  const [link, setLink] = useState({
    link1: "",
    size1: "",
    link2: "",
    size2: "",
    link3: "",
    size3: "",
  });
  const [ss, setSs] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  const [allmovie, setAllmovie] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        setAllmovie(response.data);
      });
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleLink = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLink({ ...link, [name]: value });
  };
  const handleSs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSs({ ...ss, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.year !== "" && data.wood !== "" && data.language !== "") {
      const inputs = {
        ...data,
        link: JSON.stringify(link),
        ss: JSON.stringify(ss),
      };
      console.log(inputs);
      axios
        .post(`https://sattasafari.com/hotstar/addmovie.php`, inputs)
        .then(function (response) {
          alert(response.data.message);
          if ((response.data.message = "Data Added")) {
            setData({
              ...data,
              title: "",
              starcast: "",
              img: "",
              tag: "",
              watchlink: "",
            });
            setLink({
              link1: "",
              size1: "",
              link2: "",
              size2: "",
              link3: "",
              size3: "",
            });
            setSs({
              img1: "",
              img2: "",
              img3: "",
              img4: "",
            });
            getMovie();
          }
        });
    } else {
      alert(
        `Select ${data.wood !== "" ? "" : "Wood"} ${
          data.year !== "" ? "" : "Year"
        } ${data.language !== "" ? "" : "Language"}`
      );
    }
  };
  const handleDelete = (dataid) => {
    axios
      .post(`https://sattasafari.com/hotstar/delete.php?id=${dataid}`)
      .then(function (response) {
        alert(response.data.message);
        getMovie();
      });
  };
  return (
    <>
      <section class="h-100 h-custom">
        <div class="container-fluid py-0 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
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
                  <h3 class="mb-3 text-center">{`Add New Movie`}</h3>

                  <form class="row px-md-2" onSubmit={handleSubmit}>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Movie Name"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="starcast"
                        name="starcast"
                        value={data.starcast}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Star Cast"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="img"
                        name="img"
                        value={data.img}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter Image Link"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <div class="d-flex justify-content-between">
                        <select
                          className="form-select me-1"
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
                        <input
                          type="text"
                          id="tag"
                          name="tag"
                          value={data.tag}
                          onChange={handleChange}
                          class="form-control ms-1"
                          placeholder="Enter Tag"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <div class="d-flex justify-content-between">
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
                    </div>
                    {/*Screen Shot links */}
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="img1"
                        name="img1"
                        value={ss.img1}
                        onChange={handleSs}
                        class="form-control"
                        placeholder="Enter Image1 Link"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="img2"
                        name="img2"
                        value={ss.img2}
                        onChange={handleSs}
                        class="form-control"
                        placeholder="Enter Image2 Link"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="img3"
                        name="img3"
                        value={ss.img3}
                        onChange={handleSs}
                        class="form-control"
                        placeholder="Enter Image3 Link"
                        required
                      />
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="img4"
                        name="img4"
                        value={ss.img4}
                        onChange={handleSs}
                        class="form-control"
                        placeholder="Enter Image4 Link"
                        required
                      />
                    </div>

                    {/*Download Links */}
                    <div class="col-lg-4 col-sm-8 col-8 mb-4">
                      <input
                        type="text"
                        id="link1"
                        name="link1"
                        value={link.link1}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="1080p Download Link"
                        required
                      />
                    </div>
                    <div class="col-lg-2 col-sm-4 col-4 mb-4">
                      <input
                        type="text"
                        id="size1"
                        name="size1"
                        value={link.size1}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="Size(1080p)"
                        required
                      />
                    </div>

                    <div class="col-lg-4 col-sm-8 col-8 mb-4">
                      <input
                        type="text"
                        id="link2"
                        name="link2"
                        value={link.link2}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="720p Download Link"
                        required
                      />
                    </div>
                    <div class="col-lg-2 col-sm-4 col-4 mb-4">
                      <input
                        type="text"
                        id="size2"
                        name="size2"
                        value={link.size2}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="Size(720p)"
                        required
                      />
                    </div>

                    <div class="col-lg-4 col-sm-8 col-8 mb-4">
                      <input
                        type="text"
                        id="link3"
                        name="link3"
                        value={link.link3}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="480p Download Link"
                        required
                      />
                    </div>
                    <div class="col-lg-2 col-sm-4 col-4 mb-4">
                      <input
                        type="text"
                        id="size3"
                        name="size3"
                        value={link.size3}
                        onChange={handleLink}
                        class="form-control"
                        placeholder="Size(480p)"
                        required
                      />
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12 mb-4">
                      <input
                        type="text"
                        id="watchlink"
                        name="watchlink"
                        value={data.watchlink}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Watch Link (Optional)"
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
      <h1 className="mx-4 text-center text-light">All Movie</h1>
      <div className="container-fluid">
        <div className="row">
          {allmovie.length > 0 &&
            allmovie.map((el) => (
              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4 col-6 mt-2">
                <div className="card mt-1">
                  <div
                    className=""
                    style={{ position: "absolute", right: "5px", top: "5px" }}
                  >
                    <button
                      className="btn text-white btn-lg btn-floating"
                      style={{
                        backgroundColor: "#ac2bac",
                        fontSize: "15px",
                        height: "32px",
                        width: "32px",
                        marginRight: "3px",
                      }}
                      role="button"
                    >
                      <i
                        className="fas fa-edit"
                        style={{ margin: "-7px", padding: "0px" }}
                      ></i>
                    </button>
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="btn text-white btn-lg btn-floating"
                      style={{
                        backgroundColor: "#dd4b39",
                        fontSize: "15px",
                        height: "32px",
                        width: "32px",
                      }}
                      to="#!"
                      role="button"
                    >
                      <i
                        className="fas fa-trash"
                        style={{ margin: "-7px", padding: "0px" }}
                      ></i>
                    </button>
                  </div>
                  <div className="card-body p-1">
                    <img src={el.img} className="movie-img" />
                  </div>
                  <div className="card-footer p-1" style={{ height: "90px" }}>
                    <h6 className="card-title">{`${el.title} (${el.year})`}</h6>
                    <p className="card-title">{`${el.wood} (${el.language})`}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default AddMovie;
