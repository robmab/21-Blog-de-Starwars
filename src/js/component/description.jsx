import React from "react";

export const Description = (props) => {
  return (
    <div className="container-fluid characters-wrapper ">
      <div className="row characters-wrapper-top ">
        <div className="col-12 col-md-6 m-0 p-0 characters-img ">
          <img
            width="560px"
            src={
              props.type === "planets" && props.uid === "1"
                ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                : `https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`
            }
            alt=""
          />
        </div>

        <div className="col-12 col-md-6 m-0  characters-main ">
          <h1>{props.name}</h1>
          <p>
            Quisque gravida, odio in elementum dictum, nisi erat mattis libero,
            in lacinia augue metus in tellus. Etiam sed semper diam, a egestas
            lorem. Mauris non sapien bibendum, gravida nunc vel, ultricies odio.
            Aenean interdum hendrerit lorem, non auctor sapien semper et. Donec
            faucibus varius magna, a pellentesque augue fringilla sit amet.
            Proin vitae cursus tortor, id vehicula sem. Donec ultricies lacus id
            scelerisque pulvinainterdum hendrerit loremr. Proin sed massa
            ultricies, rhoncus urna id, ultricies odio.hendrerit loremr
          </p>
        </div>
      </div>
      <div className="row characters-wrapper-bottom">
        <div className="col-12 col-md-6 table-left">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.one}</td>
                <td>{props.two}</td>
                <td>{props.three}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 table-rigth">
          <table>
            <thead>
              <tr>
                <th>Height</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.four}</td>
                <td>{props.five}</td>
                <td>{props.six}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
