import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Table() {
  const [data, setData] = useState(
    eval(window.localStorage.getItem("table")) || []
  );
  const [onAdd, setOnAdd] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    watchTill: "",
    ep: "",
    link: "",
    status: "",
  });

  const changeEditData = () => {
    setEditData({
      id: "",
      name: "",
      watchTill: "",
      ep: "",
      link: "",
      status: "",
    });
  };
  const editHandler = (id) => {
    setOnEdit(id);
  };

  const addHandler = () => {
    data.push({
      id: data.length + 1,
      name: "",
      watchTill: "",
      ep: "",
      link: "",
      status: "Watching",
    });
    setOnEdit(data.length);

    setOnAdd(data.length);
    setEditData({ ...editData, id: data.length });
  };

  const fillData = (data) => {
    setEditData(data);
  };

  const deleteHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  useEffect(() => {
    window.localStorage.setItem("table", JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Name</th>
            <th>Xem đến</th>
            <th>Trên số tập</th>
            <th>Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            onEdit === item.id ? (
              <tr key={item.id}>
                <td>{index}</td>
                <td>
                  <input
                    name="name"
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    name="watchTill"
                    type="text"
                    value={editData.watchTill}
                    onChange={(e) =>
                      setEditData({ ...editData, watchTill: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ep"
                    value={editData.ep}
                    onChange={(e) => {
                      setEditData({ ...editData, ep: e.target.value });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editData.link}
                    onChange={(e) =>
                      setEditData({ ...editData, link: e.target.value })
                    }
                    name="link"
                  />
                </td>
                <td>
                  <select
                    onChange={(e) => {
                      setEditData({ ...editData, status: e.target.value });
                    }}
                  >
                    <option value="Watching">Watching</option>
                    <option value="Completed">Completed</option>
                    <option value="Dropped">Dropped</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setData(
                        data.map((item) =>
                          item.id === editData.id ? editData : item
                        )
                      );
                      setOnEdit(false);
                      changeEditData();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      if (onAdd !== item.id) {
                        setOnEdit(false);
                        changeEditData();
                      } else {
                        setOnAdd(false);
                        setOnEdit(false);
                        changeEditData();
                        deleteHandler(item.id);
                      }
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.watchTill}</td>
                <td>{item.ep}</td>
                <td>
                  <a href={item.link}>Link</a>
                </td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      fillData(item);
                      editHandler(item.id);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div>
        <button className="btn btn-primary" onClick={addHandler}>
          Add
        </button>
        <Link to="/changepass">
          <button class="btn btn-sussesfully">Change Password</button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            window.localStorage.setItem("loggedIn", false);
            window.location = "/";
            window.location.reload();
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default Table;
