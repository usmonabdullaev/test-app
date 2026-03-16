import { Metadata } from "next";

import { SingleDataPage } from "@/container/SingleDataPage";
import { axios } from "@/services/axios";
import { ApartmentDto } from "@/types/dto";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  const { data } = await axios.get<ApartmentDto>(`/apartments/${id}`);

  return {
    title: `Site Name | ${data.title}`,
    description: data.description,
  };
}

const ApartmentPage = async ({ params }: Props) => {
  const id = (await params).id;

  return <SingleDataPage id={+id} />;
};

export default ApartmentPage;
