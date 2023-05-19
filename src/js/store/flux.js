const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      planets: [],
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
        const people = JSON.parse(localStorage.getItem("people"));
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
          setStore({ people: people });
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

      loadData: (param, type) => {
        if (getStore().people.length === 0) return; //Check if people is not empty first

        const details = getStore()[type][param];
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

              const store = getStore();
              store[type][param].item = data.result;
              setStore(store);

              //SAVE DATA ON LOCALSTORAGE
              localStorage.setItem(details.name, JSON.stringify(details.item));
            })
            .catch((error) => console.log(error));
        } else {
          const store = getStore();
          store[type][param].item = JSON.parse(component);
          setStore(store);
        }
      },
    },
  };
};

export default getState;
