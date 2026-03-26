"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  BellIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

/* ─── Types ─── */
interface SiteStatus {
  name: string;
  url: string;
  status: "online" | "offline" | "degraded" | "checking";
  statusCode: number;
  ssl: boolean;
  checkedAt: string;
}

interface ChangeRequest {
  id: string;
  description: string;
  request_type: string;
  priority: string;
  status: string;
  created_at: string;
  business_name?: string;
  client_email?: string;
}

/* ─── Sites config ─── */
const SITES = [
  { name: "ArsiTech Group", url: "https://www.arsitechgroup.com", short: "arsitechgroup.com" },
  { name: "Cimaa Sites", url: "https://www.cimaasites.ai", short: "cimaasites.ai" },
  { name: "CareConnect Live", url: "https://www.careconnectlive.org", short: "careconnectlive.org" },
  { name: "SaveYours", url: "https://www.saveyours.net", short: "saveyours.net" },
];

/* ─── Helpers ─── */
function statusColor(s: string) {
  if (s === "online") return "bg-green-500";
  if (s === "offline") return "bg-red-500";
  if (s === "degraded") return "bg-yellow-500";
  return "bg-gray-400 animate-pulse";
}

function statusBadge(s: string) {
  const map: Record<string, { bg: string; text: string; label: string }> = {
    pending: { bg: "bg-amber-100", text: "text-amber-700", label: "Pending" },
    in_progress: { bg: "bg-blue-100", text: "text-blue-700", label: "In Progress" },
    done: { bg: "bg-green-100", text: "text-green-700", label: "Done" },
    completed: { bg: "bg-green-100", text: "text-green-700", label: "Completed" },
  };
  const b = map[s] || { bg: "bg-gray-100", text: "text-gray-600", label: s };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${b.bg} ${b.text}`}>
      {b.label}
    </span>
  );
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/* ─── Page ─── */
export default function DashboardPage() {
  const [siteStatuses, setSiteStatuses] = useState<SiteStatus[]>(
    SITES.map((s) => ({
      ...s,
      status: "checking" as const,
      statusCode: 0,
      ssl: true,
      checkedAt: "",
    }))
  );
  const [requests, setRequests] = useState<ChangeRequest[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  /* Fetch site statuses */
  const fetchStatuses = useCallback(async () => {
    try {
      const res = await fetch("/api/health-check");
      const data: SiteStatus[] = await res.json();
      setSiteStatuses(data);
    } catch {
      /* keep existing state on error */
    }
  }, []);

  /* Fetch change requests from Supabase */
  const fetchRequests = useCallback(async () => {
    try {
      const { data } = await supabase
        .from("change_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      if (data) setRequests(data);
    } catch {
      /* silent */
    } finally {
      setLoadingRequests(false);
    }
  }, []);

  useEffect(() => {
    fetchStatuses();
    fetchRequests();
    const interval = setInterval(fetchStatuses, 60000);
    return () => clearInterval(interval);
  }, [fetchStatuses, fetchRequests]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await Promise.all([fetchStatuses(), fetchRequests()]);
    setRefreshing(false);
  };

  const pendingCount = requests.filter((r) => r.status === "pending").length;
  const onlineCount = siteStatuses.filter((s) => s.status === "online").length;

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            ArsiTech Group — Control Center
          </h1>
          <p className="text-text-light text-sm mt-1">{today}</p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors disabled:opacity-50 self-start"
        >
          <ArrowPathIcon className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Sites</p>
          <p className="text-2xl font-bold text-primary mt-1">{SITES.length}</p>
          <p className="text-xs text-green-600 mt-1">{onlineCount} online</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Pending</p>
          <p className="text-2xl font-bold text-primary mt-1">{pendingCount}</p>
          <p className="text-xs text-amber-600 mt-1">change requests</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Total Requests</p>
          <p className="text-2xl font-bold text-primary mt-1">{requests.length}</p>
          <p className="text-xs text-text-muted mt-1">all time</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Status</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {onlineCount === SITES.length ? "All Good" : "Issues"}
          </p>
          <p className="text-xs text-text-muted mt-1">
            {onlineCount === SITES.length ? "all sites up" : `${SITES.length - onlineCount} site(s) down`}
          </p>
        </div>
      </div>

      {/* Main grid: Sites + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left: Site tiles */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <GlobeAltIcon className="h-5 w-5 text-accent" />
            Managed Sites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITES.map((site) => {
              const st = siteStatuses.find((s) => s.name === site.name);
              const status = st?.status || "checking";
              return (
                <div
                  key={site.name}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${statusColor(status)} shrink-0`} />
                      <h3 className="font-semibold text-primary text-sm">{site.name}</h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted font-medium">
                      {status}
                    </span>
                  </div>
                  <p className="text-xs text-text-light mb-4">{site.short}</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-accent/10 text-accent hover:bg-accent hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                      Go to site
                    </a>
                  </div>
                  {st?.checkedAt && (
                    <p className="text-[10px] text-text-muted mt-3 flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      Checked {timeAgo(st.checkedAt)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h2 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
              <BellIcon className="h-4 w-4 text-accent" />
              Recent Activity
            </h2>
            {loadingRequests ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-6">
                <BellIcon className="h-8 w-8 text-gray-200 mx-auto mb-2" />
                <p className="text-xs text-text-muted">No activity yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {requests.slice(0, 5).map((r) => (
                  <div key={r.id} className="flex items-start gap-3 text-xs">
                    <div className="mt-0.5">
                      {r.status === "done" || r.status === "completed" ? (
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      ) : r.priority === "urgent" ? (
                        <ExclamationTriangleIcon className="h-4 w-4 text-amber-500" />
                      ) : (
                        <DocumentIcon className="h-4 w-4 text-blue-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-dark font-medium truncate">
                        {r.description.slice(0, 60)}
                        {r.description.length > 60 && "..."}
                      </p>
                      <p className="text-text-muted mt-0.5">
                        {r.request_type} &middot; {timeAgo(r.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Change Requests Widget */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-primary flex items-center gap-2">
                <DocumentTextIcon className="h-4 w-4 text-accent" />
                Change Requests
              </h2>
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {pendingCount} pending
              </span>
            </div>

            {loadingRequests ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 bg-gray-100 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-6">
                <DocumentTextIcon className="h-8 w-8 text-gray-200 mx-auto mb-2" />
                <p className="text-xs text-text-muted">No requests yet</p>
              </div>
            ) : (
              <div className="space-y-3 mb-4">
                {requests.slice(0, 3).map((r) => (
                  <div key={r.id} className="border border-gray-100 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-text-dark truncate max-w-[60%]">
                        {r.request_type}
                      </span>
                      {statusBadge(r.status)}
                    </div>
                    <p className="text-[11px] text-text-light truncate">{r.description}</p>
                    <p className="text-[10px] text-text-muted mt-1">{formatDate(r.created_at)}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <Link
                href="/arsi-admin"
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-text-dark py-2 rounded-lg text-xs font-medium transition-colors"
              >
                View All
              </Link>
              <Link
                href="/arsi-admin"
                className="flex items-center justify-center gap-1 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                <PlusCircleIcon className="h-3.5 w-3.5" />
                New Request
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Site Status Table */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h2 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
          <ShieldCheckIcon className="h-4 w-4 text-accent" />
          Site Status Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-xs text-text-muted font-medium uppercase tracking-wider">Site</th>
                <th className="text-left py-3 px-4 text-xs text-text-muted font-medium uppercase tracking-wider">URL</th>
                <th className="text-left py-3 px-4 text-xs text-text-muted font-medium uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs text-text-muted font-medium uppercase tracking-wider">SSL</th>
                <th className="text-left py-3 px-4 text-xs text-text-muted font-medium uppercase tracking-wider">Last Checked</th>
              </tr>
            </thead>
            <tbody>
              {siteStatuses.map((s) => (
                <tr key={s.name} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 px-4 font-medium text-text-dark">{s.name}</td>
                  <td className="py-3 px-4">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-xs"
                    >
                      {s.url.replace("https://www.", "")}
                    </a>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${statusColor(s.status)}`} />
                      <span className="capitalize text-xs">{s.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {s.ssl ? (
                      <span className="text-green-600 text-xs font-medium">Valid</span>
                    ) : (
                      <span className="text-red-500 text-xs font-medium">
                        {s.status === "checking" ? "—" : "Invalid"}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-xs text-text-muted">
                    {s.checkedAt ? timeAgo(s.checkedAt) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Small helper icon used in notifications */
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

