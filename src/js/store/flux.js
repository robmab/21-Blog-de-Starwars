const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favourites: [],
    },
    actions: {
      deleteFavourites: (name) => {
        let store = getStore();
        store.favourites = store.favourites.filter((x) => x.name != name);
        setStore(store);

        localStorage.setItem("favourites", JSON.stringify(store.favourites));
      },

      addFavourites: (props) => {
        const store = getStore();

        store.favourites.push({
          name: props.name,
          type: props.type,
          keyStore: props.keyStore,
        });
        setStore(store);

        localStorage.setItem("favourites", JSON.stringify(store.favourites));
      },

      loadAllData: () => {
        /* FAVOURITES LOAD FROM LOCALSTORAGE */
        if (localStorage.getItem("favourites") !== null) {
          const store = getStore();
          store.favourites = JSON.parse(localStorage.getItem("favourites"));
          setStore(store);
        }

        /* PEOPLE */
        const people = localStorage.getItem("people");
        if (people === null) {
          fetch("https://www.swapi.tech/api/people")
            .then((r) => {
              if (!r.ok) throw Error(r);
              return r.json();
            })
            .then((data) => {
              console.log(data);
              setStore({ people: data.results });
              //SAVE DATA ON LOCALSTORAGE
              localStorage.setItem("people", JSON.stringify(getStore().people));
            })
            .catch((error) => console.log(error));
        } else {
          setStore({ people: JSON.parse(people) });
        }

        /* VEHICLES */

        const vehicles = localStorage.getItem("vehicles");
        if (vehicles === null) {
          fetch("https://www.swapi.tech/api/vehicles")
            .then((r) => {
              if (!r.ok) throw Error(r);
              return r.json();
            })
            .then((data) => {
              console.log(data);
              setStore({ vehicles: data.results });
              //SAVE DATA ON LOCALSTORAGE
              localStorage.setItem(
                "vehicles",
                JSON.stringify(getStore().vehicles)
              );
            })
            .catch((error) => console.log(error));
        } else {
          setStore({ vehicles: JSON.parse(vehicles) });
        }
        /* PLANETS */
        const planets = localStorage.getItem("planets");
        if (planets === null) {
          fetch("https://www.swapi.tech/api/planets")
            .then((r) => {
              if (!r.ok) throw Error(r);
              return r.json();
            })
            .then((data) => {
              console.log(data);
              setStore({ planets: data.results });
              //SAVE DATA ON LOCALSTORAGE
              localStorage.setItem(
                "planets",
                JSON.stringify(getStore().planets)
              );
            })
            .catch((error) => console.log(error));
        } else {
          setStore({ planets: JSON.parse(planets) });
        }
      },

      loadData: (param, type, setValues) => {
        const details = getStore()[type][param];
        const properties = () => {
          //SET PROPERTIES FUNCTION
          if (type === "people") {
            setValues({
              subName: details.item.properties.name,
              birthYear: details.item.properties.birth_year,
              gender: details.item.properties.gender,
              height: details.item.properties.height,
              skinColor: details.item.properties.skin_color,
              eyeColor: details.item.properties.eye_color,
            });
          }

          if (type === "vehicles") {
            setValues({
              subName: details.item.properties.name,
              model: details.item.properties.model,
              length: details.item.properties.length,
              maxAtmospheringSpeed:
                details.item.properties.max_atmosphering_speed,
              costInCredits: details.item.properties.cost_in_credits,
              cargoCapacity: details.item.properties.cargo_capacity,
            });
          }
          if (type === "planets") {
            setValues({
              subName: details.item.properties.name,
              climate: details.item.properties.climate,
              population: details.item.properties.population,
              orbitalPeriod: details.item.properties.orbital_period,
              rotationPeriod: details.item.properties.rotation_period,
              diameter: details.item.properties.diameter,
            });
          }
        };

        const component = localStorage.getItem(details.name);
        if (component === null) {
          //CHARGE DATA FROM API
          fetch(details.url)
            .then((r) => {
              if (!r.ok) throw Error(r);
              return r.json();
            })
            .then((data) => {
              console.log(data);
              getStore()[type][param].item = data.result;

              properties(); //SET PROPERTIES OF USESTATE FROM VIEW

              //SAVE DATA ON LOCALSTORAGE
              localStorage.setItem(
                details.item.properties.name,
                JSON.stringify(details.item)
              );
            })
            .catch((error) => console.log(error));
        } else {
          //CHARGE DATA FROM LOCALSTORAGE AND SAVE IT ON STORE FLUX
          const store = getStore();
          store[type][param].item = JSON.parse(component);
          setStore(store);

          properties(); //SET PROPERTIES OF USESTATE FROM VIEW
        }
      },
    },
  };
};

export default getState;
