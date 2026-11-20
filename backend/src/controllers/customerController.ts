
import { Request, Response } from "express";
import Customer from "../models/Customer.js";

// Create Customer
export const createCustomer = async (req: Request, res: Response) => {
    try {
        const { name, phone, email, address } = req.body;

        const customer = await Customer.create({
            name,
            phone,
            email,
            address
        });

        res.status(201).json({
            success: true,
            message: "Customer created successfully",
            data: customer
        });


    } catch (error: any) {

        console.error("CREATE CUSTOMER ERROR:", error);

        res.status(400).json({
            success: false,
            message: error.code === 11000
                ? "Email already exists"
                : error.message
        });
    }

};

// Get All Customers
export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find();

        res.status(200).json({
            success: true,
            data: customers
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Customer By ID
export const getCustomerById = async (req: Request, res: Response) => {
    try {
        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }

        res.status(200).json({
            success: true,
            data: customer
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update Customer
export const updateCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: customer
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Customer
export const deleteCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
