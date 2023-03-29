import {
  Application,
  Binding,
  Component,
  CoreBindings,
  inject,
} from "@loopback/core";
import { MetabaseServiceBindings } from "./keys";
import { MetabaseService } from "./services/metabase.service";

export class TestComponent implements Component {
  bindings = [
    Binding.bind(MetabaseServiceBindings.METABASE).toClass(MetabaseService),
    Binding.bind(MetabaseServiceBindings.METABASE).toClass(MetabaseService),
    Binding.bind(MetabaseServiceBindings.METABASE_URL).to(
      "http://localhost:3000/api"
    ),
    Binding.bind(MetabaseServiceBindings.METABASE_USERNAME).to(
      process.env.USERNAME_MB
    ),
    Binding.bind(MetabaseServiceBindings.METABASE_PASSWORD).to(
      process.env.PASSWORD_MB
    ),
  ];

  constructor(@inject(CoreBindings.APPLICATION_INSTANCE) app: Application) {}
}
