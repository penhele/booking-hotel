import { getAmenitites } from "@/lib/data";
import CreateForm from "./createForm";

const CreateRoom = async () => {
  const amenities = await getAmenitites();
  if (!amenities) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create New Room</h1>
      <CreateForm amenities={amenities} />
    </div>
  );
};

export default CreateRoom;
