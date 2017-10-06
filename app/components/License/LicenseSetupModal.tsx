import * as React from "react";
import { getLicensePath, getStatus, lic, licenseParse } from "../../module/license";
import * as native from "../../native";
import HeaderWorkspaceBlock from "../HeaderWorkspaceBlock";

const dialog = window.electron.remote.dialog;

interface ILicenseSetupModalProps {
  text_info: string;
  closeWindow: () => void;
  icon: string;
}

interface ILicenseSetupModalState {
  license_file: string;
  license_key: string;
}

class LicenseSetupModal extends React.Component<ILicenseSetupModalProps, ILicenseSetupModalState> {
  static contextTypes = {
    locale: React.PropTypes.string,
    localize: React.PropTypes.func,
  };

  constructor(props: ILicenseSetupModalProps) {
    super(props);

    this.state = ({
      license_file: "",
      license_key: "",
    });
  }

  componentDidMount() {
    $("input#input_file, textarea#input_key").characterCounter();
  }

  paste() {
    $("#input_key").focus();
    document.execCommand("paste");
    $("#input_key").trigger("autoresize");
  }

  setupLicense() {
    const { localize, locale } = this.context;
    const licFilePath = getLicensePath();
    const path = native.path.dirname(licFilePath);
    const options = {
      name: "Trusted eSign",
    };

    let command = "";
    let status: any;

    if (window.PLATFORM !== "win32") {
      command = "sh -c " + "\"";
      command = command + "mkdir -p " + "'" + path + "'" + " && ";
    } else {
      if (!native.fs.existsSync(path)) {
        command = command + " mkdir " + '"' + path + '"' + " && ";
      }
    }

    if (this.state.license_key) {
      const data = licenseParse(this.state.license_key);
      if (data.sub !== "-") {
        status = getStatus(this.state.license_key);
        if (status.type === "ok") {
          if (window.PLATFORM === "win32") {
            command = command + "echo " + this.state.license_key.trim() + " > " + '"' + licFilePath + '"';
          } else {
            command = command + " printf " + this.state.license_key.trim() + " > " + "'" + licFilePath + "'" + " && ";
            command = command + " chmod 777 " + "'" + licFilePath + "'" + "\"";
          }
          window.sudo.exec(command, options, function(error: any) {
            if (!error) {
              trusted.common.OpenSSL.stop();
              trusted.common.OpenSSL.run();

              lic.setInfo = data;
              lic.setStatus = status;

              $(".toast-lic_key_setup").remove();
              Materialize.toast(localize("License.lic_key_setup", locale), 2000, "toast-lic_key_setup");
            } else {
              $(".toast-write_file_error").remove();
              Materialize.toast(localize("Common.write_file_error", locale), 2000, "toast-write_file_error");
            }
          });
        } else {
          $(".toast-status.message").remove();
          Materialize.toast(status.message, 2000, "toast-status.message");
        }
      } else {
        $(".toast-lic_key_uncorrect").remove();
        Materialize.toast(localize("License.lic_key_uncorrect", locale), 2000, "toast-lic_key_uncorrect");
      }
    } else {
      if (native.fs.existsSync(this.state.license_file)) {
        let data: string = native.fs.readFileSync(this.state.license_file, "utf8");
        if (data) {
          data = data.trim();
          const info = licenseParse(data);
          if (info.sub !== "-") {
            status = getStatus(data);
            if (status.type === "ok") {
              if (window.PLATFORM === "win32") {
                command = command + "echo " + data + " > " + '"' + licFilePath + '"';
              } else {
                command = command + " printf " + data + " > " + "'" + licFilePath + "'" + " && ";
                command = command + " chmod 777 " + "'" + licFilePath + "'" + "\"";
              }
              window.sudo.exec(command, options, function(error: any) {
                if (!error) {
                  trusted.common.OpenSSL.stop();
                  trusted.common.OpenSSL.run();

                  lic.setInfo = info;
                  lic.setStatus = status;
                  $(".toast-lic_key_setup").remove();
                  Materialize.toast(localize("License.lic_key_setup", locale), 2000, "toast-lic_key_setup");
                } else {
                  $(".toast-write_file_error").remove();
                  Materialize.toast(localize("Common.write_file_error", locale), 2000, "toast-write_file_error");
                }
              });
            } else {
              $(".toast-status.message").remove();
              Materialize.toast(status.message, 2000, "toast-status.message");
            }
          } else {
            $(".toast-lic_file_uncorrect").remove();
            Materialize.toast(localize("License.lic_file_uncorrect", locale), 2000, "toast-lic_file_uncorrect");
          }
        } else {
          $(".toast-read_file_error").remove();
          Materialize.toast(localize("Common.read_file_error", locale), 2000, "toast-read_file_error");
        }
      } else {
        $(".toast-lic_file_not_found").remove();
        Materialize.toast(localize("License.lic_file_not_found", locale), 2000, "toast-lic_file_not_found");
      }
    }
    this.props.closeWindow();
  }

  openLicenseFile() {
    const { localize, locale } = this.context;

    if (!window.framework_NW) {
      const file = dialog.showOpenDialog({
        filters: [
          { name: localize("License.license", locale), extensions: ["lic"] },
        ],
        properties: ["openFile"],
      });
      if (file) {
        $("#input_file").focus();
        this.setState({ license_file: file[0], license_key: this.state.license_key });
      }
    }
  }

  render() {
    const { localize, locale } = this.context;
    const self = this;
    const disable = this.state.license_file || this.state.license_key ? "" : "disabled";

    return (
    <div id="add-licence-key" className="modal licence-modal">
      <div className="licence-modal-main">
        <HeaderWorkspaceBlock text={localize("License.enter_key", locale)} new_class="modal-bar" icon="close" onСlickBtn={this.props.closeWindow.bind(this)} />
        <div className="licence-modal-content">
          <div className="license-key">
            <div className="input-field col s6 input-field-licence">
              <i className="material-icons prefix key-prefix">vpn_key</i>
              <textarea id="input_key" className="materialize-textarea" value={this.state.license_key} onChange={function(e: any) {
                self.setState({ license_file: self.state.license_file, license_key: e.target.value });
              }} />
              <label htmlFor="input_key">{localize("License.entered_the_key", locale)}</label>
              <a className="nav-small-btn waves-effect" onClick={this.paste.bind(this)}>
                <i className="nav-small-icon material-icons">content_copy</i>
              </a>
            </div>
          </div>
          <div className="or">
            {localize("Common.or", locale)}
          </div>
          <div className="license-file">
            <div className="input-field col s6 input-field-licence">
              <i className="material-icons prefix key-prefix">vpn_key</i>
              <input id="input_file" type="text" value={this.state.license_file} onChange={function(e: any) {
                self.setState({ license_file: e.target.value, license_key: self.state.license_key });
              }} />
              <label htmlFor="input_file">{localize("License.lic_file_choose", locale)}</label>
              <a className="nav-small-btn waves-effect" onClick={this.openLicenseFile.bind(this)}>
                <i className="nav-small-icon material-icons">insert_drive_file</i>
              </a>
            </div>
          </div>
          <div className="license-btn">
            <a className={"waves-effect waves-light btn " + disable} onClick={this.setupLicense.bind(this)}>{localize("License.Entered", locale)}</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default LicenseSetupModal;
