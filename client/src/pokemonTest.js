import React from "react";
import { configure, mount } from "enzyme";
import { MemoryRouter} from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import CreatePoke from "./component/CreatePoke/CreatePokemon";
import store from './redux/store/index'
configure({ adapter: new Adapter() });

describe("<CreatePoke />", () => {
  
  

  describe("Estructura", () => {
    let createpoke;
   
    beforeEach(() => {
      createpoke = mount(
        <Provider store={store}>
        <MemoryRouter initialEntries={["/pokemons"]}>
          <CreatePoke />
        </MemoryRouter>
      </Provider>
        
      );
    });
   
   
    it("Debería renderizar un form", () => {
      expect(createpoke.find("form")).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Nombre: "', () => {
      expect(createpoke.find("label").at(0).text()).toEqual("Nombre");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
      expect(createpoke.find('input[name="name"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Ataque"', () => {
      expect(createpoke.find("label").at(1).text()).toEqual("Ataque");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "attack"', () => {
      expect(createpoke.find('input[name="attack"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Defensa"', () => {
      expect(createpoke.find("label").at(2).text()).toEqual("Defensa");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "defense"', () => {
      expect(createpoke.find('input[name="defense"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Velocidad"', () => {
        expect(createpoke.find("label").at(3).text()).toEqual("Velocidad");
      });

    it('Debería renderizar un input con la propiedad "name" igual a "speed"', () => {
        expect(createpoke.find('textarea[name="speed"]')).toHaveLength(1);
      });
  

    it('Debería renderizar un button con "type" igual a "submit" y con texto "Crear Pokemon"', () => {
      expect(createpoke.find('button[type="submit"]')).toHaveLength(1);
      expect(createpoke.find("button").at(0).text()).toEqual("Crear Pokemon");
    });
  });

  describe("Manejo de estados", () => {
    let useState, useStateSpy,createpoke ;
    
    beforeEach(() => {
      useState = jest.fn();
      useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((values) => [values, useState]);
      createpoke = mount(
           <Provider store={store}>
        <MemoryRouter initialEntries={["/pokemons"]}>
          <CreatePoke />
        </MemoryRouter>
         </Provider>
      );
    });

    it("Debería setear correctamente los valores del estado inicial del componente", () => {
      expect(useStateSpy).toHaveBeenCalledWith({
        name:"",
        types:[],
        weight:"",
        height:"",
        sprites:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
      });
    });

    describe("Name input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "name', () => {
        createpoke.find('input[name="name"]').simulate("change", {
          target: { name: "name", value: "Pikachu" },
        });
        expect(useState).toHaveBeenCalledWith({
          name:"Pikachu",
          types:[],
          weight:"",
          height:"",
          sprites:"",
          hp:"",
          attack:"",
          defense:"",
          speed:"",
        });
      });
    });

    describe("attack input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "attack', () => {
        createpoke.find('input[name="attack"]').simulate("change", {
          target: { name: "attack", value: 3 },
        });
        expect(useState).toHaveBeenCalledWith({
          name:"",
          types:[],
          weight:"",
          height:"",
          sprites:"",
          hp:"",
          attack:3,
          defense:"",
          speed:"",
        });
      });
    });

    describe("Released input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "speed', () => {
        createGame.find('input[name="speed"]').simulate("change", {
          target: { name: "speed", value: "33" },
        });
        expect(useState).toHaveBeenCalledWith({
          name:"",
          types:[],
          weight:"",
          height:"",
          sprites:"",
          hp:"",
          attack:"",
          defense:"",
          speed:"33",
        });
      });
    });

    describe("Description defense", () => {
        it('Debería cambiar de estado cuando cambie el valor del input "defense', () => {
          createpoke.find('input[name="defense"]').simulate("change", {
            target: { name: "defense", value: "22" },
          });
          expect(useState).toHaveBeenCalledWith({
            name:"",
            types:[],
            weight:"",
            height:"",
            sprites:"",
            hp:"",
            attack:"",
            defense:"22",
            speed:"",
          });
        });
      });

    

  });
});