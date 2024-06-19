import axios from "axios";
import { useState } from "react";



export const CustomerService = {

    getData() {
        axios.get('http://localhost:8080/clientes')
        .then(function (response) {
            // manipula o sucesso da requisição
            const a = response.data;
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error.message);
        })
        .finally(function () {
            // sempre será executado
        });
        
        return [{
            id: 1000,
            name: 'James Butt',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663
        },
        {
            id: 1499,
            name: 'Chauncey Motley',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'Affiliated With Travelodge',
            date: '2019-04-23',
            status: 'renewal',
            verified: true,
            activity: 42,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 88090
        }]
    },
    
    getCustomersMedium() {
        return Promise.resolve(this.getData());
    }
};

// Data example
    /*{
        id: 1000,
        name: 'James Butt',
        country: {
            name: 'Algeria',
            code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png'
        },
        balance: 70663
    }*/

    // Data example servidores PMSGA
    /* {
        "id": 3159,
        "matricula": "19783",
        "nome": "PATRICIA MARIA BEVENUTO DE SOUSA"
    }*/
