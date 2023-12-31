import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  const token = (await deployments.get("OPEN")).address;

  await deployments.deploy("OpenStaking", {
    from: deployer,
    args: [token],
  });
};
export default func;
func.tags = ["OpenStaking"];
func.dependencies = ["OPEN"];
