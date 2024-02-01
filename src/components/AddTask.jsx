import { useEffect, useState } from "react";

export default function AddTask({ onClose, onAddTask, onOpen, updateData }) {
  const [isError, setIsError] = useState(true);
  const [data, setData] = useState(
    updateData || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  // console.log("data", data);
  // console.log(updateData);

  useEffect(() => {
    if (updateData) {
      setIsError(false);
    }
  }, [updateData]);

  // If UpdateData null then return true
  const [isAdd, setIsAdd] = useState(Object.is(updateData, null));

  const handleChangeData = (e) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setData({
      ...data,
      [name]: value,
    });

    // if (
    //   data?.title !== "" &&
    //   data?.description !== "" &&
    //   data?.tags.length >= 0 &&
    //   data?.priority !== ""
    // ) {
    //   setIsError(false);
    // } else {
    //   setIsError(true);
    // }
  };

  return (
    <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-20 left-0">
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add" : "Update"} New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              value={data.title}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              onChange={handleChangeData}
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              value={data.description}
              onChange={handleChangeData}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                onChange={handleChangeData}
                name="tags"
                id="tags"
                value={data.tags}
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={data.priority}
                onChange={handleChangeData}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-x-6 lg:mt-20">
          <button
            // disabled={isError}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={(e) => {
              onAddTask(e, data, isAdd);
              onClose();
            }}
          >
            {isAdd ? "Create new" : "Update"} Task
          </button>

          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
