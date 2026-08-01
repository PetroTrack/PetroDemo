import { DashboardLayout } from "../../layouts/dashboard";

import {
  AppPage,
  PageHeader,
  PageContent,
} from "../../design-system/page";

import DashboardStats from "./components/DashboardStats";
import FleetStatusChart from "./components/FleetStatusChart";
import DocumentExpiryChart from "./components/DocumentExpiryChart";
import ComplianceOverview from "./components/ComplianceOverview";
import RecentActivities from "./components/RecentActivities";
import UpcomingExpiries from "./components/UpcomingExpiries";

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <AppPage>
        <PageHeader
          title="Dashboard"
          subtitle="Welcome to PetroTrack"
        />

        <DashboardStats />

        {/* Fleet Status + Compliance */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <PageContent>
              <FleetStatusChart />
            </PageContent>
          </div>

          <PageContent>
            <ComplianceOverview />
          </PageContent>
        </div>

        {/* Document Expiry + Recent Activities */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <DocumentExpiryChart />
            <RecentActivities />
            </div>
            <div className="mt-6">
            <UpcomingExpiries />
        </div>
      </AppPage>
    </DashboardLayout>
  );
}