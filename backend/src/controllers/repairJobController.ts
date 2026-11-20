
import { Request, Response } from "express";
import RepairJob from "../models/RepairJob.js";

// Create Repair Job
export const createRepairJob = async (req: Request, res: Response) => {
    try {
        const repairJob = await RepairJob.create(req.body);

        res.status(201).json({
            success: true,
            message: "Repair Job created successfully",
            data: repairJob
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Repair Jobs
export const getAllRepairJobs = async (req: Request, res: Response) => {
    try {
        const repairJobs = await RepairJob.find().populate("customer");

        res.status(200).json({
            success: true,
            data: repairJobs
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Repair Job By ID
export const getRepairJobById = async (req: Request, res: Response) => {
    try {
        const repairJob = await RepairJob.findById(req.params.id)
            .populate("customer");

        if (!repairJob) {
            return res.status(404).json({
                success: false,
                message: "Repair Job not found"
            });
        }

        res.status(200).json({
            success: true,
            data: repairJob
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update Repair Job
export const updateRepairJob = async (req: Request, res: Response) => {
    try {
        const repairJob = await RepairJob.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate("customer");

        if (!repairJob) {
            return res.status(404).json({
                success: false,
                message: "Repair Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Repair Job updated successfully",
            data: repairJob
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Repair Job
export const deleteRepairJob = async (req: Request, res: Response) => {
    try {
        const repairJob = await RepairJob.findByIdAndDelete(req.params.id);

        if (!repairJob) {
            return res.status(404).json({
                success: false,
                message: "Repair Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Repair Job deleted successfully"
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
