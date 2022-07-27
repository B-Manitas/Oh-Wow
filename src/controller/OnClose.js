// Super-class import
import { SuperController } from "./SuperController";

// Libraries import
import _ from "lodash";

// Exception import
import Catch from "exceptions/ErrorsCatcher";

// Store import
import { updateService } from "store/ActionsCreator";

export class OnClose extends SuperController {
  /**
   * Update image on close service. Then go to previous page.
   * @param {Object} data The data service updated.
   * @param {Object} init The data service not updated.
   * @param {Object} nav The navigation object for changing page.
   */
  @Catch
  async service(data, init, navigation) {
    if (data.img != init.img && this.thisIsAdmin()) {
      await this.frontend.update.service({ _id: data._id, img: data.img });

      updateService({ ...init, img: data.img });
    }

    navigation.goBack();
  }
}
