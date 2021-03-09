import { ImageModel } from "./image.model";
import { jsonProperty, Serializable } from "ts-serializable";

export class Artist extends Serializable {
  @jsonProperty([ImageModel], [])
  public images = [];
  @jsonProperty(String)
  public name = "";
}
