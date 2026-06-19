import Layout from "../components/Layout";
import { toast } from "react-toastify";

function Settings() {
  const saveSettings = () => {
    toast.success("Settings Saved Successfully");
  };

  return (
    <Layout>
      <h2 className="mb-4">Settings</h2>

      <div className="dashboard-card p-4">

        <h4 className="mb-4">
          Application Settings
        </h4>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">
            Enable Notifications
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">
            Enable Email Alerts
          </label>
        </div>

        <button
          className="btn btn-primary"
          onClick={saveSettings}
        >
          Save Settings
        </button>

      </div>
    </Layout>
  );
}

export default Settings;