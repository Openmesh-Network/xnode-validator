import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { stakingSigner } from "../settings";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  const token = (await deployments.get("OPEN")).address;

  await deployments.deploy("OpenWithdrawing", {
    from: deployer,
    args: [token, stakingSigner],
  });
};
export default func;
func.tags = ["OpenWithdrawing"];
func.dependencies = ["OPEN"];
