import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Inserting a test data into mongodb
  /*
Step 1: Interface
Step 2: Schema
Step 3: Model
Step 4: Database Query
*/

  // Creating an interface

  // Creating schema using interfaces
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  // Creating model
  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "888",
      role: "student",
      password: "3ref",
      name: {
        firstName: "Maruf",
        middleName: "Mozumder",
        lastName: "Tintin",
      },
      dateOfBirth: "25 Novembr",
      gender: "male",
      email: "maruf@gmail.com",
      contactNo: "46546",
      emergencyContactNo: "45257320",
      presentAddress: "Milan",
      permanentAddress: "Bangladesh",
    });
    await user.save();
  };

  createUserToDB();
});

export default app;
