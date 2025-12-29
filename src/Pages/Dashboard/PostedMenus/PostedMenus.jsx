import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../Context/useAuth/useAuth";

const PostedMenus = () => {
  const { user } = useAuth();
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMenu, setEditMenu] = useState(null);
  const [saving, setSaving] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchMenus = useCallback(async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`${API_URL}/menus/user/${user.email}`);
      const data = await res.json();
      setMenus(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [API_URL, user?.email]);

  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  const handleEdit = async (id) => {
    const res = await fetch(`${API_URL}/menus/${id}`);
    const data = await res.json();
    setEditMenu(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch(`${API_URL}/menus/${editMenu._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editMenu.name,
          price: Number(editMenu.price),
          description: editMenu.description,
          image: editMenu.image,
          isAvailable: editMenu.isAvailable,
        }),
      });

      setMenus((prev) =>
        prev.map((m) => (m._id === editMenu._id ? editMenu : m))
      );
      setEditMenu(null);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this menu?")) return;
    await fetch(`${API_URL}/menus/${id}`, { method: "DELETE" });
    setMenus((prev) => prev.filter((m) => m._id !== id));
  };

  if (loading) {
    return <div className="text-center py-20">Loading menus...</div>;
  }

  return (
    <div className="p-4 sm:p-6 min-h-screen">
      {" "}
      <motion.h1 className="text-3xl sm:text-4xl font-bold mb-10">
        My Posted <span className="text-primary">Menus</span>
      </motion.h1>
      <div className="space-y-4 md:hidden">
        {" "}
        {menus.map((menu) => (
          <div key={menu._id} className="card bg-base-100 shadow-xl">
            <div className="card-body p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{menu.name}</h3>
                <span
                  className={`badge ${
                    menu.isAvailable ? "badge-success" : "badge-error"
                  }`}
                >
                  {menu.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>

              <p className="text-sm">
                <strong>Price:</strong> ৳{menu.price}
              </p>

              <p className="text-sm">
                <strong>Created:</strong>{" "}
                {new Date(menu.createdAt).toLocaleDateString()}
              </p>

              <div className="flex gap-2 pt-2">
                <button
                  className="btn btn-sm btn-warning flex-1"
                  onClick={() => handleEdit(menu._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-error flex-1"
                  onClick={() => handleDelete(menu._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto rounded-xl shadow">
        {" "}
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Created</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, index) => (
              <tr key={menu._id}>
                <th>{index + 1}</th>
                <td>{menu.name}</td>
                <td>৳{menu.price}</td>
                <td>
                  <span
                    className={`badge ${
                      menu.isAvailable ? "badge-success" : "badge-error"
                    }`}
                  >
                    {menu.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td>{new Date(menu.createdAt).toLocaleDateString()}</td>
                <td className="flex gap-2 justify-center">
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={() => handleEdit(menu._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(menu._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editMenu && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Menu</h3>

            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                className="input input-bordered w-full"
                value={editMenu.name}
                onChange={(e) =>
                  setEditMenu({ ...editMenu, name: e.target.value })
                }
              />
              <input
                type="number"
                className="input input-bordered w-full"
                value={editMenu.price}
                onChange={(e) =>
                  setEditMenu({ ...editMenu, price: e.target.value })
                }
              />
              <textarea
                className="textarea textarea-bordered w-full"
                value={editMenu.description}
                onChange={(e) =>
                  setEditMenu({ ...editMenu, description: e.target.value })
                }
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editMenu.isAvailable}
                  onChange={(e) =>
                    setEditMenu({
                      ...editMenu,
                      isAvailable: e.target.checked,
                    })
                  }
                  className="checkbox checkbox-primary"
                />
                Available
              </label>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditMenu(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedMenus;
