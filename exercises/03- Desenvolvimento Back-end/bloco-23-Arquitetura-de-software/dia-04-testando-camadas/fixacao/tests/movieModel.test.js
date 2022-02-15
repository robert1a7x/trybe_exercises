const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../models/connection');
const moviesModel = require('../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await moviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await moviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Busca apenas um filme pelo ID no DB', () => {
  describe('Quando nao existe um filme com o id inserido', () => {
    before(() => {
      const execute = [[]];
  
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(() => {
      connection.execute.restore();
    });
    
    it('Retorna nulo', async () => {
      const response = await moviesModel.getById();

      expect(response).to.be.equal(null);
    });
  });

  describe('Quando existe um filme com o id Inserido', () => {
    before(() => {
      const execute = {
        id: 1,
        title: 'As tranças do rei careca',
        directedBy: 'Ednaldo Pereira',
        releaseYear: 1127,
      }

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
      connection.execute.restore();
    });
  });

  it('retorna um objeto', async () => {
    const movie = await moviesModel.getById(1);

    expect(movie).to.be.an('object');
  });

  it('O objeto nao está vazio', async () => {
    const movie = await moviesModel.getById(1);

    expect(movie).to.be.not.empty;
  });

  it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
    const movie = await moviesModel.getById(1);

    expect(movie).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
  });
});