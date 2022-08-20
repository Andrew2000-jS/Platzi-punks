const deploy = async () => {
  // getSigners() trae la información que traemos desde nuestra llave privada
  // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account: ", deployer.address);

  // Definimos PlatziPunks en el contexto
  const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
  // Instancia del contracto desplegado
  const deployed = await PlatziPunks.deploy();
  console.log("PlatziPunks is deployed at: ", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
