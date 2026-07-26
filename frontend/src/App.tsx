import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  TextField,
  Box,
} from "@mui/material";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "zustand";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const schema = z.object({
  customerName: z.string().min(3, "Minimum 3 characters"),
});

type FormData = z.infer<typeof schema>;

const useStore = create<{
  company: string;
  setCompany: (company: string) => void;
}>((set) => ({
  company: "Petro Track",
  setCompany: (company) => set({ company }),
}));

const chartData = [
  { month: "Jan", sales: 30 },
  { month: "Feb", sales: 45 },
  { month: "Mar", sales: 28 },
  { month: "Apr", sales: 60 },
];

const rowData = [
  { no: "C0001", name: "ABC Ltd", city: "Nairobi" },
  { no: "C0002", name: "Spectrum Ltd", city: "Mombasa" },
  { no: "C0003", name: "Contoso", city: "Kisumu" },
];

const columnDefs: ColDef[] = [
  { field: "no" },
  { field: "name" },
  { field: "city" },
];

function App() {
  const [count, setCount] = useState(0);

  const company = useStore((s) => s.company);

  const { register, handleSubmit, formState: { errors } } =
    useForm<FormData>({
      resolver: zodResolver(schema),
    });

  const onSubmit = (data: FormData) => {
    toast.success(`Welcome ${data.customerName}`);
  };

  return (
    <>
      <Toaster />

      <div className="min-h-screen bg-slate-100 p-10">

        <Typography variant="h3" align="center" fontWeight="bold">
          PetroTrack Compliance Management System
        </Typography>

        <Typography align="center" sx={{ mb: 5 }}>
          Everything below should work if the framework is configured correctly.
        </Typography>

        {/* Framework Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            "React",
            "TypeScript",
            "Vite",
            "Material UI",
            "Tailwind",
            "Lucide",
            "Framer Motion",
            "Toast",
            "AG Grid",
            "React Hook Form",
            "Zod",
            "Zustand",
            "Recharts",
            "Day.js",
          ].map((item) => (

            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
            >

              <Card>

                <CardContent className="text-center">

                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={40}
                  />

                  <Typography mt={2}>
                    {item}
                  </Typography>

                  <Chip
                    color="success"
                    label="Working"
                    sx={{ mt: 2 }}
                  />

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>

        {/* React */}

        <Card sx={{ mt: 5 }}>

          <CardContent>

            <Typography variant="h5">
              React State Test
            </Typography>

            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => setCount(count + 1)}
            >
              Count : {count}
            </Button>

          </CardContent>

        </Card>

        {/* Toast */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              Toast Test
            </Typography>

            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => toast.success("Everything is working!")}
            >
              Show Toast
            </Button>

          </CardContent>

        </Card>

        {/* React Hook Form + Zod */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              React Hook Form + Zod
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >

              <TextField
                {...register("customerName")}
                label="Customer Name"
                fullWidth
                sx={{ mt: 2 }}
              />

              <Typography color="error">
                {errors.customerName?.message}
              </Typography>

              <Button
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>

            </Box>

          </CardContent>

        </Card>

        {/* Zustand */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              Zustand
            </Typography>

            <Typography>
              Company : {company}
            </Typography>

          </CardContent>

        </Card>

        {/* Day.js */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              Day.js
            </Typography>

            <Typography>
              {dayjs().format("dddd, DD MMMM YYYY HH:mm:ss")}
            </Typography>

          </CardContent>

        </Card>

        {/* Recharts */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              Recharts
            </Typography>

            <div style={{ height: 250 }}>

              <ResponsiveContainer>

                <LineChart data={chartData}>

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </CardContent>

        </Card>

        {/* AG Grid */}

        <Card sx={{ mt: 3 }}>

          <CardContent>

            <Typography variant="h5">
              AG Grid
            </Typography>

            <div
              className="ag-theme-quartz"
              style={{ height: 300 }}
            >

              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
              />

            </div>

          </CardContent>

        </Card>

      </div>
    </>
  );
}

export default App;