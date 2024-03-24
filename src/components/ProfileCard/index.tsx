import BaseCard from "../Base/BaseCard";

export type ProfileCardProps = {
  CompanyName: string;
  CompanyAddress: string;
  loading?: boolean;
};

export default function ProfileCard({
  CompanyName,
  CompanyAddress,
  loading: Loading = false,
}: ProfileCardProps) {
  return (
    <BaseCard
      image={require("../../../assets/icon.png")}
      subtitle="Equipe"
      title={CompanyName}
      loading={Loading}
      hiddenOpacity={true}
      description={CompanyAddress}
    />
  );
}
