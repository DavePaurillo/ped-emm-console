import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const enterpriseName = router.query.enterpriseName;

  return <h1>{enterpriseName}</h1>;
};

export default Dashboard;
