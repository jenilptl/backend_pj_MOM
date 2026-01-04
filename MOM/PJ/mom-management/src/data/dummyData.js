/* =========================
   MEETING TYPE (MASTER)
========================= */

export const meetingTypes = [
  {
    MeetingTypeID: 1,
    MeetingTypeName: "Team Meeting",
    Remarks: "Internal team discussion",
    Created: "2024-12-01 10:00",
    Modified: "2024-12-01 10:00"
  },
  {
    MeetingTypeID: 2,
    MeetingTypeName: "Client Meeting",
    Remarks: "Client interaction",
    Created: "2024-12-01 10:05",
    Modified: "2024-12-01 10:05"
  },
  {
    MeetingTypeID: 3,
    MeetingTypeName: "Project Review",
    Remarks: "Project progress review",
    Created: "2024-12-01 10:10",
    Modified: "2024-12-01 10:10"
  },
  {
    MeetingTypeID: 4,
    MeetingTypeName: "Management Review",
    Remarks: "Management level discussion",
    Created: "2024-12-01 10:15",
    Modified: "2024-12-01 10:15"
  }
];


/* =========================
   STAFF (MASTER)
========================= */

export const staff = [
  {
    StaffID: 1,
    StaffName: "Amit Sharma",
    MobileNo: "9876543210",
    EmailAddress: "amit@company.com",
    Remarks: "Project Manager",
    Created: "2024-11-01",
    Modified: "2024-11-01"
  },
  {
    StaffID: 2,
    StaffName: "Neha Patel",
    MobileNo: "9123456780",
    EmailAddress: "neha@company.com",
    Remarks: "Developer",
    Created: "2024-11-02",
    Modified: "2024-11-02"
  },
  {
    StaffID: 3,
    StaffName: "Rahul Verma",
    MobileNo: "9988776655",
    EmailAddress: "rahul@company.com",
    Remarks: "Tester",
    Created: "2024-11-03",
    Modified: "2024-11-03"
  },
  {
    StaffID: 4,
    StaffName: "Pooja Mehta",
    MobileNo: "9090909090",
    EmailAddress: "pooja@company.com",
    Remarks: "HR",
    Created: "2024-11-04",
    Modified: "2024-11-04"
  },
  {
    StaffID: 5,
    StaffName: "Kunal Joshi",
    MobileNo: "9000011111",
    EmailAddress: "kunal@company.com",
    Remarks: "Admin",
    Created: "2024-11-05",
    Modified: "2024-11-05"
  }
];


/* =========================
   MEETINGS (15 RECORDS)
========================= */

export const meetings = [
  {
    MeetingID: 101,
    MeetingDate: "2025-01-01 10:00",
    MeetingTypeID: 1,
    MeetingDescription: "Sprint planning",
    DocumentPath: "/docs/sprint-plan.pdf",
    Created: "2024-12-20",
    Modified: "2024-12-20",
    IsCancelled: false,
    CancellationDateTime: null,
    CancellationReason: null
  },
  {
    MeetingID: 102,
    MeetingDate: "2025-01-02 11:00",
    MeetingTypeID: 2,
    MeetingDescription: "Client requirement discussion",
    DocumentPath: "/docs/client-req.pdf",
    Created: "2024-12-21",
    Modified: "2024-12-21",
    IsCancelled: false,
    CancellationDateTime: null,
    CancellationReason: null
  },
  {
    MeetingID: 103,
    MeetingDate: "2025-01-03 15:00",
    MeetingTypeID: 3,
    MeetingDescription: "Weekly project review",
    DocumentPath: "",
    Created: "2024-12-22",
    Modified: "2024-12-22",
    IsCancelled: true,
    CancellationDateTime: "2025-01-02 18:00",
    CancellationReason: "Client unavailable"
  },
  {
    MeetingID: 104,
    MeetingDate: "2025-01-04 09:30",
    MeetingTypeID: 4,
    MeetingDescription: "Quarterly management review",
    DocumentPath: "/docs/q-review.pdf",
    Created: "2024-12-23",
    Modified: "2024-12-23",
    IsCancelled: false,
    CancellationDateTime: null,
    CancellationReason: null
  },

  ...Array.from({ length: 11 }, (_, i) => ({
    MeetingID: 105 + i,
    MeetingDate: `2025-01-${5 + i} 10:00`,
    MeetingTypeID: (i % 4) + 1,
    MeetingDescription: `Discussion meeting ${i + 1}`,
    DocumentPath: "",
    Created: "2024-12-24",
    Modified: "2024-12-24",
    IsCancelled: i % 5 === 0,
    CancellationDateTime: i % 5 === 0 ? "2025-01-04 09:00" : null,
    CancellationReason: i % 5 === 0 ? "Rescheduled" : null
  }))
];


/* =========================
   MEETING MEMBERS (ATTENDANCE)
========================= */

export const meetingMembers = [
  {
    MeetingMemberID: 1,
    MeetingID: 101,
    StaffID: 1,
    IsPresent: true,
    Remarks: "",
    Created: "2025-01-01",
    Modified: "2025-01-01"
  },
  {
    MeetingMemberID: 2,
    MeetingID: 101,
    StaffID: 2,
    IsPresent: true,
    Remarks: "",
    Created: "2025-01-01",
    Modified: "2025-01-01"
  },
  {
    MeetingMemberID: 3,
    MeetingID: 101,
    StaffID: 3,
    IsPresent: false,
    Remarks: "On leave",
    Created: "2025-01-01",
    Modified: "2025-01-01"
  },
  {
    MeetingMemberID: 4,
    MeetingID: 102,
    StaffID: 1,
    IsPresent: true,
    Remarks: "",
    Created: "2025-01-02",
    Modified: "2025-01-02"
  },
  {
    MeetingMemberID: 5,
    MeetingID: 102,
    StaffID: 4,
    IsPresent: true,
    Remarks: "",
    Created: "2025-01-02",
    Modified: "2025-01-02"
  }
];

