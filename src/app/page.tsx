
import classes from "./page.module.css";
import {Form} from "@/app/components/form/form";
import {Header} from "@/app/components/header/Header";
import {Pagination} from "@/app/components/pagination/pagination";

export default function Home() {
  return (
    <div className={classes.app}>
        <div className={classes.container}>
            <Header />
            <Form />
        </div>

    </div>
  );
}
