import { jsonProperty, Serializable } from "ts-serializable";

export class ImageModel extends Serializable {
  @jsonProperty(Number)
  height = 0;

  @jsonProperty(String)
  url = "";
}
