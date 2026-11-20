
import mongoose, { Document, Schema } from "mongoose";

export interface IRepairJob extends Document {
    customer: mongoose.Types.ObjectId;
    deviceName: string;
    deviceType: string;
    problem: string;
    technician: string;
    status: string;
    estimatedCost: number;
}

const repairJobSchema = new Schema<IRepairJob>(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },
        deviceName: {
            type: String,
            required: true,
            trim: true
        },
        deviceType: {
            type: String,
            required: true
        },
        problem: {
            type: String,
            required: true,
            trim: true
        },
        technician: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending"
        },
        estimatedCost: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

const RepairJob = mongoose.model<IRepairJob>(
    "RepairJob",
    repairJobSchema
);

export default RepairJob;
